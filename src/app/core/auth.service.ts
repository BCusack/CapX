import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

import { AlertsService } from './alerts.service';
import { OAuthSettings } from '../core/auth';
import { User } from './user';
import { Client } from '@microsoft/microsoft-graph-client';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authenticated: boolean;
  public user: User;
  userData: any;


  constructor(
    private msalService: MsalService,
    private alertsService: AlertsService) {

    if (this.msalService.getUser()) {
      this.authenticated = true;
      this.userData = this.msalService.getUser();
      localStorage.setItem('user', JSON.stringify(this.userData));
      JSON.parse(localStorage.getItem('user'));
    } else {
      this.authenticated = false;
      localStorage.setItem('user', null);
      JSON.parse(localStorage.getItem('user'));
    }
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

    }
  }

  // Sign out
  signOut(): void {
    this.msalService.logout();
    this.user = null;
    this.authenticated = false;
    localStorage.removeItem('user');

  }

  // Silently request an access token
  async getAccessToken(): Promise<string> {
    const result = await this.msalService.acquireTokenSilent(OAuthSettings.scopes)
      .catch((reason) => {
        this.alertsService.add('Get token failed', JSON.stringify(reason, null, 2));
      });

    // Temporary to display token in an error box
    if (result) { this.alertsService.add('Token acquired', result); }
    return result;
  }
  async getUser(): Promise<User> {

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
    const graphUser = await graphClient.api('/me').get();

    const user = new User();
    user.displayName = graphUser.displayName;
    // Prefer the mail property, but fall back to userPrincipalName
    user.email = graphUser.mail || graphUser.userPrincipalName;
    console.log(user.displayName);
    return user;
  }
}
