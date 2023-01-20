import { NavigationClient } from "@azure/msal-browser";
import { Capacitor } from "@capacitor/core";
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';
import { NavController } from "@ionic/angular";
import { MsalService } from '@azure/msal-angular';
import { environment } from "src/environments/environment.prod";
const urlHost = environment.hostname;

export class CustomNavigationClient extends NavigationClient {

    register = false;
    online = false;

    constructor(
        private iab: InAppBrowser,
    ) {
        super();
    }

    async navigateExternal(url: string, options: any) {
        if (url.includes('/logout?')) {
            //window.location.href = urlHost;
            window.open(urlHost, '_blank', 'noopener');
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
                    window.open(url, '_blank', 'noopener');
                    //window.location.href = url;
                }
                if (event.url.includes('register')) {
                    this.register = true;
                    browser.close();
                    window.open(`${urlHost}/register`, '_blank', 'noopener');
                    //window.location.href = `${urlHost}/register`;
                }
            });
            browser.on('exit').subscribe(event => {
                if (!this.register && !this.online) {
                    //window.location.href = urlHost;
                    window.open(urlHost, '_blank', 'noopener');
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
}