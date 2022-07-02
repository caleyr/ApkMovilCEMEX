import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private Http: HTTP){}

  doPost(url, header, body){
    return this.Http.post(`${url}`, body, header);
  }

}
