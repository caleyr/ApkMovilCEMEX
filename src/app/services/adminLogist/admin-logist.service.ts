import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment.prod';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AdminLogistService {

  constructor(private http: HttpService) { }

  createAdminLogistThird(data : any) {
    return this.http.doPostFormData(`${URL}/api/authentication/CreateUserTPLMTruckMan`, data, {responseType: 'text'});
  }

  createDriver(data : any) {
    return this.http.doPostFormData(`${URL}/api/authentication/CreateUserDriver`, data, {responseType: 'text'});
  }

  updateAdminLogistThird(data : any, email : string) {
    return this.http.doPutFormData(`${URL}/api/authentication/UpdateTPLM_TruckMan/${email}`, data , {responseType: 'text'});
  }

  updateDriver(data : any, email : string) {
    return this.http.doPutFormData(`${URL}/api/authentication/UpdateUserDriver/${email}`, data, {responseType: 'text'});
  }
}

