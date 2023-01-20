import { Component, OnInit } from '@angular/core';
import { filter, finalize } from 'rxjs/operators';
import { CustomNavigationClient } from './utilities/CustomNavigationClient';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { FcmService } from './services/fcm.service';
import { startWith } from 'rxjs/operators';
import { Filesystem } from '@capacitor/filesystem';


//MSAL
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType } from '@azure/msal-browser';
import { Router } from '@angular/router';
import { ApiService } from './services/auth/api.service';
import { UserService } from 'src/app/services/user.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  isIframe = false;
  loginDisplay = false;
  widowsRegister = false;
  autocompleteO = null;

  constructor(
    private authService: MsalService,
    private iab: InAppBrowser,
    private msalBroadcastService: MsalBroadcastService,
    private fcmService: FcmService,
    private apiService: ApiService,
    private userService: UserService,
    private router: Router,
  ) {
    this.authService.instance.setNavigationClient(new CustomNavigationClient(this.iab));
  }

  ngOnInit() {
    const theme = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle('light');
    this.fcmService.initPush();
    this.initializeApp();
  }

  initializeApp() {
    this.msalBroadcastService.msalSubject$.pipe(
      startWith(async () => await this.userService.getUserEmail()),
      filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
    ).subscribe(async (result: EventMessage) => {
      this.isIframe = true;
      const payload = result.payload as AuthenticationResult;
      this.authService.instance.setActiveAccount(payload.account);
      this.apiService.loginSaveToken(payload.idToken);
      await this.userService.getUserEmail();
      setTimeout(() => {
        this.isIframe = false;
      }, 3000);
    });
  }

  logout() {
    this.authService.logoutRedirect();
  }
}
