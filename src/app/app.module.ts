import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginComponent } from './login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from './core/auth.service';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { AddProjectComponent } from './dash/add-project/add-project.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import {
  MsalModule, MsalService
} from '@azure/msal-angular';

import { OAuthSettings } from './core/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddProjectComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    BrowserAnimationsModule,
    BootstrapModule,
    FontAwesomeModule,
    MsalModule.forRoot({
      auth: {
        clientId: OAuthSettings.appId
      }
    }, {
      popUp: true,
      consentScopes: ['https://graph.microsoft.com/User.ReadWrite']
    })

  ],
  providers: [
    AuthService, MsalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
