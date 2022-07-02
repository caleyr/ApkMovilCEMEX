import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AdminLogistService {

  constructor(private http: HttpClient) { }

  createAdminLogistThird(data : any) {
    return this.http.post(`${URL}/api/authentication/CreateUserTPLMTruckMan`, data);
  }

  createDriver(data : any) {
    return this.http.post(`${URL}/api/authentication/CreateUserDriver`, data);
  }

  updateAdminLogistThird(data : any, email : string) {
    return this.http.put(`${URL}/api/authentication/UpdateTPLM_TruckMan/${email}`, data , {responseType: 'text'});
  }

  updateDriver(data : any, email : string) {
    return this.http.put(`${URL}/api/authentication/UpdateUserDriver/${email}`, data, {responseType: 'text'});
  }
}

