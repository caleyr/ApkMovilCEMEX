/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { CustomNavigationClient } from '../../../utilities/CustomNavigationClient';
import { filter } from 'rxjs/operators';
import { EventMessage, EventType, AuthenticationResult } from '@azure/msal-browser';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private router: Router,
    private iab: InAppBrowser,
    private msalService: MsalService
  ) {
  }

  async ngOnInit() {
    alert('Entro');
    //this.initializeApp();
  }

  initializeApp() {
    alert('Entro');
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        alert('--> login success 3: ' + result);
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);
        this.msalService.instance.handleRedirectPromise().then((authResult: any) => {
          if (authResult) {
            this.router.navigate(['/change-password']);
          } else {
            this.msalService.instance.loginRedirect();
          }
        });
      });
  }
}
