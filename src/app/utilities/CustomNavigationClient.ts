import { NavigationClient } from "@azure/msal-browser";
import { Capacitor } from "@capacitor/core";
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';
import { NavController } from "@ionic/angular";
import { MsalService } from '@azure/msal-angular';
import { environment } from "src/environments/environment";
import { Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
const urlHost = environment.hostname;

export class CustomNavigationClient extends NavigationClient {

    register = false;
    online = false;



    constructor(
        private iab: InAppBrowser,
        @Inject(DOCUMENT) private document: Document
    ) {
        super();
    }

    async navigateExternal(url: string, options: any) {
        if (url.includes('/logout?')) {
            //window.location.href = urlHost;
            this.onUrl(urlHost);
        } else if (Capacitor.isNativePlatform()) {
            this.register = false;
            this.online = false;
            const browser = this.iab.create(url, '_blank', {
                location: 'yes',
                clearcache: 'yes',
                clearsessioncache: 'yes',
                hidenavigationbuttons: 'yes',
                hideurlbar: 'yes',
                fullscreen: 'yes'
            });
            browser.on('loadstart').subscribe(event => {
                if (event.url.includes('#state')) {
                    this.online = true;
                    browser.close();
                    const domain = event.url.split('#')[0];
                    const url = event.url.replace(domain, `${urlHost}/app`);
                    this.onUrl(url);
                    //window.location.href = url;
                }
                if (event.url.includes('register')) {
                    this.register = true;
                    browser.close();
                    this.onUrl(`${urlHost}/register`);
                    //window.location.href = `${urlHost}/register`;
                }
            });
            browser.on('exit').subscribe(event => {
                if (!this.register && !this.online) {
                    //window.location.href = urlHost;
                    this.onUrl(urlHost);
                }
            });
        } else {
            if (options.noHistory) {
                window.location.replace(url);
            } else {
                window.location.assign(url);
            }
        }
        return true;
    }

    onUrl(url: string) {
        const link = this.document.createElement('a');
        link.target = '_blank';
        link.href = url;
        link.rel = "noopener"
        link.click();
        link.remove();
    }
}