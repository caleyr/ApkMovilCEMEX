/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NavController, Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { HttpService } from '../http/http.service';
import { Profile } from '../../models/profile.model';

const URL = environment.url;
const headersHttp = new HttpHeaders({
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
});

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string = null;
  currentToken: string = null;
  role: string;
  currentRoles: any[] = [];
  manTruck: any = false;
  expiration: string = null;
  user: object = null;

  perfil : Profile;

  rol : string = '3';

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private navCtrl: NavController,
    private location: Location,
    private HTTP : HttpService,
    private  plataforma:  Platform

    ) { this.init(); }

    async init() {
      await this.storage.create();
    }

     loginWeb(data: any) {
      return this.http.post(`${URL}/api/authentication/login`, data, {headers: headersHttp});      
    }

    loginAndroid(data: any) {      
      return this.HTTP.doPost(`${URL}/api/authentication/login`, data, {headers: headersHttp});
    }

    async getData (token){
      var perfil : Profile = new Profile();
      perfil.FirstName = JSON.parse(window.atob(token.split('.')[1]))["FirstName"];
      perfil.LastName = JSON.parse(window.atob(token.split('.')[1]))["LastName"];
      perfil.Email = JSON.parse(window.atob(token.split('.')[1]))["Email"];
      perfil.CompanyId = JSON.parse(window.atob(token.split('.')[1]))["CompanyId"];
      perfil.Document = JSON.parse(window.atob(token.split('.')[1]))["Document"];
      perfil.SapCode = JSON.parse(window.atob(token.split('.')[1]))["SapCode"];
      perfil.PhoneNumber = JSON.parse(window.atob(token.split('.')[1]))["PhoneNumber"];      
      perfil.Roles = JSON.parse(window.atob(token.split('.')[1]))["Roles"];  
      var exp = JSON.parse(window.atob(token.split('.')[1]))["exp"];
  
      await sessionStorage.setItem('roles', perfil.Roles);
      await sessionStorage.setItem('token', token);
      await sessionStorage.setItem('exp', exp);
  
      this.perfil = perfil;
    }

    public logout(){
      this.token = null;
      this.expiration = null;
      this.perfil = null;
      this.storage.clear();
      this.navCtrl.navigateRoot('/login', { animated: true });
    }

  async saveToken(token: string, expiration: string, user: object, roles: []){
     this.token = token;
     this.expiration = expiration;
     this.user = user;
    
    await this.storage.set('current_user', user);

    await this.validateToken();
   }

   async getToken(){
       this.currentToken = await this.storage.get('token') || null;
   }

   async validateToken(): Promise<boolean>{
    await this.getToken();
    if(!this.currentToken){
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
   }

  //  async validateLogin(): Promise<boolean>{
  //    await this.getToken();
  //    if(!this.currentToken){
  //      return Promise.resolve(true);
  //    }

  //    this.location.back();
  //    return Promise.resolve(false);
  //  }

}
