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
  rol : string = null;
  expiration: string = null;
  user: object = null;

  profileUser : Profile;

  private keyToken = 'token';
  private keyExpiration = 'expiracion';
  private keyRoles = 'roles';

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

  async saveDataProfile (token){    
    this.token = token;
    this.rol = await JSON.parse(window.atob(token.split('.')[1]))["Roles"];
    var exp = await JSON.parse(window.atob(token.split('.')[1]))["exp"];
    
  
    await this.storage.set( this.keyRoles , this.rol);
    await this.storage.set( this.keyToken , token);
    await this.storage.set( this.keyExpiration , exp);
  }

  async getDataProfile (token){
    var profile : Profile = new Profile();
    profile.id = await JSON.parse(window.atob(token.split('.')[1]))["UserId"];
    profile.FirstName = await JSON.parse(window.atob(token.split('.')[1]))["FirstName"];
    profile.LastName = await JSON.parse(window.atob(token.split('.')[1]))["LastName"];
    profile.Email = await JSON.parse(window.atob(token.split('.')[1]))["Email"];
    profile.CompanyId = await JSON.parse(window.atob(token.split('.')[1]))["CompanyId"];
    profile.Document = await JSON.parse(window.atob(token.split('.')[1]))["Document"];
    profile.SapCode = await JSON.parse(window.atob(token.split('.')[1]))["SapCode"];
    profile.PhoneNumber = await JSON.parse(window.atob(token.split('.')[1]))["PhoneNumber"];      
    profile.Roles = await JSON.parse(window.atob(token.split('.')[1]))["Roles"];
    this.profileUser = profile;
  }

  getDataExpiration (token){
    return JSON.parse(window.atob(token.split('.')[1]))["exp"];
  }

  public logout(){
    this.token = null;
    this.profileUser = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  
  isLogged(): Promise<boolean> {    
    return this.storage.get(this.keyToken).then(async (data) =>{
      const token = await data;
      if ( token ) {
        const expiration = await this.getDataExpiration(data);
        const expirationDate = new Date(expiration * 1000);
        if ( expirationDate <= new Date() ) {
          this.logout();
          return false;
        }else{
          await this.getDataProfile(data);
          if(this.profileUser){
            console.log(this.profileUser);        
            return true;
          }
        }
      }else{        
        return false;
      }     
    });    
  }
}
