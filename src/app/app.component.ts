import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { CustomNavigationClient } from './utilities/CustomNavigationClient';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { FcmService } from './services/fcm.service';

//MSAL
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType } from '@azure/msal-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {

  loginDisplay = false;
  widowsRegister = false;
  autocompleteO = null;

  constructor(
    private authService: MsalService,
    private iab: InAppBrowser,
    private msalBroadcastService: MsalBroadcastService,
    private fcmService : FcmService,
    private router : Router) {
      this.authService.instance.setNavigationClient(new CustomNavigationClient(this.iab));
    }

  ngOnInit() {
    const theme = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle('light');
    this.fcmService.initPush();
    this.initializeApp();
  }

  initializeApp() {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);
      });
  }

  logout() {
    this.authService.logoutRedirect();
  }
}
