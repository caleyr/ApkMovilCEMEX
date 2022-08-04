import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { from, Observable } from 'rxjs';
import { Companies } from '../../interfaces/companies/companies';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private HttpC: HTTP){}

  doPostFormData(url, data, header){
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('multipart');
    return from(this.HttpC.sendRequest(url, {method: 'post', data : data, headers: header, responseType: 'text'}));
  }

  doPutFormData(url, data, header){
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('multipart');
    return from(this.HttpC.sendRequest(url, {method: 'put', data : data, headers: header, responseType: 'text'}));
  }

  doPost(url, data, header){
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('json');
    return from(this.HttpC.sendRequest(url, {method: 'post', data : data, headers: header, responseType: 'text'}));
  }

  doPut(url, data, header){
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('json');
    return from(this.HttpC.sendRequest(url, {method: 'put', data : data, headers: header, responseType: 'text'}));
  }

  doGet(url, header){
    return from(this.HttpC.sendRequest(url, {method: 'get', headers: header, responseType: 'json'}));
  } 

}
