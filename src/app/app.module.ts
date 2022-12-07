import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { DatePipe } from '@angular/common';

//MSAL
import { MsalGuard, MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { Configuration } from '@azure/msal-browser';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


export const b2cPolicies = {
  names: {
    signUpSignIn: 'B2C_1_CargaApp_SignIn_Flow',
  },
  authorities: {
    singUpSignIn: {
      authority: 'https://cemexb2cdev.b2clogin.com/cemexb2cdev.onmicrosoft.com/B2C_1_CargaApp_SignIn_Flow',
    }
  },
  authotityDomain: 'https://cemexb2cdev.b2clogin.com'
};

export const msalconfig: Configuration = {
  auth: {
    clientId: '1425ccd3-f0d5-4836-8800-c8e1008e3303', // Application (client) ID from the app registration
    authority: b2cPolicies.authorities.singUpSignIn.authority, // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
    knownAuthorities: [b2cPolicies.authotityDomain],
    redirectUri: 'https://localhost:8100'
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
  }
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    CmxWebComponentsModule.forRoot(),
    MsalModule.forRoot( new PublicClientApplication(msalconfig), 
    {
      interactionType: InteractionType.Redirect
    }, null)
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  },
    HTTP,
    DatePipe,
    MsalGuard,
    InAppBrowser
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule { }
