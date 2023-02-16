import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpService } from './http/http.service';
import { UserDetail } from '../models/user-detail.model';
import { ApiService } from './auth/api.service';
import { MsalService } from '@azure/msal-angular';
import { tap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const BASE_URL_API = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _refresh$ = new Subject<void>();

  constructor(
    private http: HttpService,
    private apiService: ApiService,
    private authService: MsalService,
    private router: Router,
    private httpA : HttpClient
  ) { }

  get refresh$() {
    return this._refresh$;
  }

  getUserDetail(id: string) {
    return this.http.fetch(`${BASE_URL_API}/api/authentication/GetUserDetail/${id}`, {}, 'get');
  }

  async getUserEmail(): Promise<any> {
    await this.apiService.loadToken();
    if (this.authService.instance.getActiveAccount() !== null) {
      return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/users/emails?email=${this.authService.instance.getAllAccounts()[0].idTokenClaims.extension_mail}`, {}, 'get', false, false).pipe(
        tap(data => {
          if (data.data.length === 0) {
            this.apiService.userProfile = undefined;
          } else {
            this.apiService.userProfile = data.data[0];
          }
          this.router.navigateByUrl('/app/home');
        })
      ).toPromise();
    } else {
      return of(undefined);
    }
  }

  getUserEmailLogin(email: any) {
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/users/emails?email=${email}`, {}, 'get', false, false);
  }

  updateProfile(data: any) {
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/users`, data, 'put', true).pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  updateUserTravel(data: any) {
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/users`, data, 'put', true);
  }

  updateUser(data: any) {
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/users`, data, 'put', true).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  updateDocument(id : number , data : any){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/users/${id}/documents`, data, 'upload', true, false, true);
  }

  updateDocumentProfile(id : number , data : any){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/users/${id}/documents`, data, 'upload', true, false, true).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }
}
