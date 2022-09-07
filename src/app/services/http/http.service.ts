import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { from, Observable } from 'rxjs';
import { Companies } from '../../interfaces/companies/companies';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private HttpC: HTTP) { }

  doPostFormData(url, data, header) {
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('multipart');
    return from(this.HttpC.sendRequest(url, { method: 'post', data: data, headers: header, responseType: 'text' }));
  }

  doPostFormDataUser(url, data: FormData, header) {
    this.HttpC.setRequestTimeout(5.0);
    this.HttpC.sendRequest(url, { method: 'post', data: data, serializer: 'multipart', headers: header, responseType: 'text' }).then(data => {
      console.log(data);
    }).catch((error) => {
      alert('Error' + error);
    })
  }

  uploadFile(data, filename) {
    const dataF = new FormData();
    dataF.append('Drivinglicense', data, filename);
    var url = 'https://cemexapp-api-test.azurewebsites.net/api/authentication/UpdateUserDocuments/sergiofon22@gmail.com';
    return this.HttpC.sendRequest(url, { method: 'put', data: dataF, serializer: 'multipart', headers: {}, responseType: 'text' });
  }

  doPutFormData(url, data, header){
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('multipart');
    return from(this.HttpC.sendRequest(url, { method: 'put', data: data, headers: header, responseType: 'text' }));
  }

  doPost(url, data, header){
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('json');
    return from(this.HttpC.sendRequest(url, { method: 'post', data: data, headers: header, responseType: 'text' }));
  }

  doPut(url, data, header){
    this.HttpC.clearCookies();
    this.HttpC.setDataSerializer('json');
    return from(this.HttpC.sendRequest(url, { method: 'put', data: data, headers: header, responseType: 'text' }));
  }

  doGet(url, header){
    return from(this.HttpC.sendRequest(url, { method: 'get', headers: header, responseType: 'json' }));
  } 

}
