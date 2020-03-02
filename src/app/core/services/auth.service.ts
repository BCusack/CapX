import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

import { AlertsService } from './alerts.service';
import { OAuthSettings } from '../services/auth';
import { User, GraphUser } from './user';
import { Client } from '@microsoft/microsoft-graph-client';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authenticated: boolean;
  public user: User;
  public graphUser: GraphUser;
  constructor(
    private msalService: MsalService,
    private alertsService: AlertsService,
    private router: Router) {

    this.authenticated = false;
    this.user = null;
  }

  // Prompt the user to sign in and
  // grant consent to the requested permission scopes
  async signIn(): Promise<void> {
    const result = await this.msalService.loginPopup(OAuthSettings.scopes)
      .catch((reason) => {
        this.alertsService.add('Login failed', JSON.stringify(reason, null, 2));
      });

    if (result) {
      this.authenticated = true;
      // Temporary placeholder
      this.user = await this.getUser();
      this.router.navigate(['']);
    }
  }

  // Sign out
  signOut(): void {
    this.msalService.logout();
    this.user = null;
    this.authenticated = false;
  }

  // Silently request an access token
  async getAccessToken(): Promise<string> {
    const result = await this.msalService.acquireTokenSilent(environment.graph.scopes)
      .catch((reason) => {
        this.alertsService.add('Get token failed', JSON.stringify(reason, null, 2));
      });

    // Temporary to display token in an error box
    if (result) { this.alertsService.add('Token acquired', result); }
    return result;
  }
  private async getUser(): Promise<User> {
    if (!this.authenticated) { return null; }

    const graphClient = Client.init({
      // Initialize the Graph client with an auth
      // provider that requests the token from the
      // auth service
      authProvider: async (done) => {
        const token = await this.getAccessToken()
          .catch((reason) => {
            done(reason, null);
          });

        if (token) {
          done(null, token);
        } else {
          done('Could not get an access token', null);
        }
      }
    });

    // Get the user from Graph (GET /me)
    this.graphUser = await graphClient.api('/me').get();


    this.user.displayName = this.graphUser.displayName;
    // Prefer the mail property, but fall back to userPrincipalName
    this.user.email = this.graphUser.mail || this.graphUser.displayName;

    return this.user;
  }
}
