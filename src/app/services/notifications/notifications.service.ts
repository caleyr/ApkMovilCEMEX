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

  notificationData = {
    channelCode: "PN",
    params: {
      Uuids: [],
      Devices: [],
      Title: "Test", // Required
      Body: "This is a test", // Required
      Payload: {
        Dummy: "Dummy"
      },
      AppCode: "OrderTaking_App"
    }
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
    return this.http.fetch(`${URLCemex}/v5/cm/notifications/devices`, data, 'post', false, false, false, true);
  }

  createUserbtc(data: any){
    return this.http.fetch(`${URL}/v1/load/dsm/notifications/phones`, data, 'post', true, true, false);
  }

  sendNotificationMobileBtc(data : any){
    return this.http.fetch(`${URLCemex}/v5/cm/notifications/send`, data, 'post', false, false, false, true);
  }

  deleteUserMobile(){
    return this.http.fetch(`${URLCemex}/v5/cm/notifications/devices/uuid/${this.dataSend.uuid}/applications/CemexCarga_App/platforms/G`, {}, 'delete', false, false, false, true);
  }

  transformDataNotification(data : string[]){
    return new Promise<string[]>(async (resolve, reject) => {
      for (let index = 0; index < data.length; index++) {
        data[index] = `${data[index]}|G`        
      }
      resolve(data);
    });    
  }
}
