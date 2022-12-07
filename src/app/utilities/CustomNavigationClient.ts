import { NavigationClient } from "@azure/msal-browser";
import { Capacitor } from "@capacitor/core";
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Router } from '@angular/router';
import { NavController } from "@ionic/angular";
import { MsalService } from '@azure/msal-angular';

export class CustomNavigationClient extends NavigationClient {

register = false;
online = false;

    constructor(
        private iab: InAppBrowser,
    ) {
        super();
    }

    async navigateExternal(url: string, options: any) {
        if (Capacitor.isNativePlatform()) {
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
                    const url = event.url.replace(domain, 'https://com.cemex.app/app/home');
                    alert(url);
                    window.location.href = url;
                }
                if (event.url.includes('register')) {
                    this.register = true;                    
                    browser.close(); 
                    window.location.href = 'https://com.cemex.app/register';
                    
                }
            });
            browser.on('exit').subscribe(event => {
                if(!this.register && !this.online){           
                    window.location.href = 'https://com.cemex.app';
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