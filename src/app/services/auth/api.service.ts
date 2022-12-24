import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { BehaviorSubject, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';

const ACCESS_TOKEN_KEY = 'my-access-token';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  currentAccessToken = null;

  constructor(
    private authService : MsalService) {
    this.loadToken();
  }

  // Load accessToken on startup
  async loadToken() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      this.currentAccessToken = token;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  // Sign in a user and store access and refres token
  loginSaveToken(token: string){
    return new Promise(resolve =>{
      localStorage.setItem( ACCESS_TOKEN_KEY, token);
      this.currentAccessToken = token;
      return resolve(true);
    });
  }

  saveUser(email : string){
    return new Promise(resolve =>{
      
    });
  }

  logout(){
    const logoutRequest = {
      account: this.authService.instance.getAllAccounts()[0],
      extraQueryParameters: {"id_token_hint" : localStorage.getItem( ACCESS_TOKEN_KEY )}
    };
    localStorage.removeItem( ACCESS_TOKEN_KEY );
    this.authService.logoutRedirect(logoutRequest);
  }

  getNewAccessToken() {
    const refreshToken = from(localStorage.getItem( ACCESS_TOKEN_KEY ));
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
      })
    );
  }

  storeAccessToken(accessToken) {
    this.currentAccessToken = accessToken.idToken;
    this.authService.instance.setActiveAccount(accessToken.account);
    return of(localStorage.setItem( ACCESS_TOKEN_KEY, accessToken.idToken ));
  }

}
