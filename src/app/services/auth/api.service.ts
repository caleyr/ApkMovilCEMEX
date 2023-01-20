import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { BehaviorSubject, from, of, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';
import { UserDetail } from '../../models/user-detail.model';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';

const ACCESS_TOKEN_KEY = 'my-access-token';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  currentAccessToken = null;
  name: string;
  email: string;

  userProfile : UserDetail = new UserDetail();

  constructor(
    private authService : MsalService,
    private navCtrl : NavController) {
  }

  // Load accessToken on startup
  async loadToken() {
    const token = await Preferences.get( { key : ACCESS_TOKEN_KEY} );
    if (token.value) {
      this.currentAccessToken = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  // Sign in a user and store access and refres token
  loginSaveToken(token: string){
    return new Promise(resolve =>{
      Preferences.set({key : ACCESS_TOKEN_KEY, value : token})
      this.currentAccessToken = token;
      return resolve(true);
    });
  }

  async logout(){
    const token = await Preferences.get( { key : ACCESS_TOKEN_KEY} )
    const logoutRequest = {
      account: this.authService.instance.getAllAccounts()[0],
      extraQueryParameters: {"id_token_hint" : token.value }
    };
    await Preferences.remove({ key : ACCESS_TOKEN_KEY});
    this.authService.logoutRedirect(logoutRequest);
  }

  getNewAccessToken() {
    const refreshToken = from(Preferences.get( { key : ACCESS_TOKEN_KEY} ));
    return refreshToken.pipe(
      switchMap(token => {
        if (this.authService.instance.getAllAccounts()[0] != null) {
          const accessTokenRequest = {
            scopes: ["https://cemexb2cdev.b2clogin.com/user.read"],
            account: this.authService.instance.getAllAccounts()[0]
          };
          return this.authService.acquireTokenSilent(accessTokenRequest);
        } else {
          return of(null);
        }
      }),
      catchError((err) =>{
        console.log('ERROR GET ACCESO TOKEN'+ JSON.stringify(err));        
        return throwError(err);
      })
    );
  }

  refreshToken() {
    return new Promise((resolve) => {
      const accessTokenRequest = {
        scopes: ["https://cemexb2cdev.b2clogin.com/user.read"],
        account: this.authService.instance.getAllAccounts()[0]
      };
      from(this.authService.acquireTokenSilent(accessTokenRequest)).subscribe({
        next: async (token) => {
          await this.storeAccessToken(token).toPromise();
          resolve(token);
        },
        error: () => {
          this.logout();
          resolve(true);
        }
      });
    });
  }

  storeAccessToken(accessToken) {
    this.currentAccessToken = accessToken.idToken;
    this.authService.instance.setActiveAccount(accessToken.account);
    return of(Preferences.set({key : ACCESS_TOKEN_KEY, value : accessToken.idToken}));
  }

}
