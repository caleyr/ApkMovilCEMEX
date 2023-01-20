import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { environment } from '../../environments/environment.prod';
const BASE_URL_API = environment.url;


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpService) { }

  getTravels( status : any){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/dashboards/travels/${status}`, {} , 'get');
  }

  getUsers( role : any){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/dashboards/users/${role}`, {} , 'get');
  }

  getVehicles(){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/dashboards/vehicles`, {} , 'get');
  }

  getCompanies(){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/dashboards/companies`, {} , 'get');
  }

  getWaiting(){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/dashboards/waitinglists`, {} , 'get');
  }
}
