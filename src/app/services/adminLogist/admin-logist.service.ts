import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AdminLogistService {

  constructor(private http: HttpService) { }
  
  createUser(data : FormData) {
    return this.http.fetch(`${URL}/v1/load/dsm/users`, data, 'post', true, false);
  }

  updateAdminLogistThird(data : FormData, email : string) {
    return this.http.doPutFormData(`${URL}/api/authentication/UpdateTPLM_TruckMan/${email}`, data);
  }

  updateDriver(data : FormData, email : string) {
    return this.http.doPutFormData(`${URL}/api/authentication/UpdateUserDriver/${email}`, data);
  }
}

