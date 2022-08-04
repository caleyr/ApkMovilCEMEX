import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { HttpService } from '../http/http.service';
const URL = environment.url;
const headersHttp = new HttpHeaders({
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
});

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  email : string;

  constructor(
    private http: HttpService
  ) { }

  public forgotPassword(data: any) {
    return this.http.doPost(`${URL}/api/authentication/SendPasswordResetCode`, data, {});
  }

  public changePassword(data: any) {
    return this.http.doPost(`${URL}/api/authentication/ResetPassword`, data, {});
  }

  // forgotPassword(email: string){
  //   const data = { email };

  //   return new Promise(resolve =>{
  //    this.http.post(`${URL}/api/auth/forgot-password`, data).subscribe(async resp =>{
  //       if (resp["token"]){
  //         resolve(true);
  //       } else {
  //          resolve(false);
  //       }
  //    });
  //   });
  // }

}
