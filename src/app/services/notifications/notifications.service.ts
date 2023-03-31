import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

const URLCemex = environment.urlNotification;
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  dataSend = {
    uuid: "",
    userAccount: "",
    platform: "G",
    token: "",
    applicationCode: "CemexCarga_App "
  }

  dataRegister = {
    UserId: "",
    UUID: "",
    Token: "",
    Platform: "G",
    AplicationCode: "CemexCarga_App "
  }

  constructor(
    private http: HttpService
  ) { 
    this.getUuid();
  }


  async getUuid(){
    this.dataSend.uuid = (await Device.getId()).uuid;
    this.dataRegister.UUID = (await Device.getId()).uuid;
  }

  createUserMobile(data: any){
    console.log(JSON.stringify(data));    
    return this.http.fetch(`${URLCemex}/v5/cm/notifications/devices`, data, 'post', false, false, false, true);
  }

  createUserbtc(data: any){
    return this.http.fetch(`${URL}/v1/load/dsm/notifications/phones`, data, 'post', true, true, false);
  }

  deleteUserMobile(){
    return this.http.fetch(`${URLCemex}/v5/cm/notifications/devices/uuid/${this.dataSend.uuid}/applications/CemexCarga_App/platforms/G`, {}, 'delete', false, false, false, true);
  }
}
