import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { ActionPerformed, PushNotifications, PushNotificationSchema, Token } from '@capacitor/push-notifications';
import { NotificationsService } from './notifications/notifications.service';
import { Device } from '@capacitor/device';

@Injectable({

  providedIn: 'root'
})
export class FcmService {

  constructor(
    private router: Router,
    private notiService: NotificationsService,
  ) { }

  initPush() {
    if (Capacitor.getPlatform() !== 'web') {
      this.registerPush();
    }
  }

  private registerPush() {
    PushNotifications.requestPermissions().then((permission) => {
      if (permission.receive === 'granted') {
        PushNotifications.register();
      } else {

      }
    });


    PushNotifications.addListener('registration', async (token: Token) => {
      this.notiService.dataSend.token = token.value;
      this.notiService.dataRegister.Token = token.value;
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: ActionPerformed) => {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification));
        if (data) {
          this.router.navigateByUrl(`/cuidados`);
        }
      }
    );
  }

}
