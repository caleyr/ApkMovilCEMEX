import { Subject } from 'rxjs';
import { Travel } from './../../interfaces/travels/travel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelListUnique } from 'src/app/interfaces/travels/travel-list-unique';
import { TravelSearch } from 'src/app/interfaces/travels/travel-search';
import { environment } from 'src/environments/environment';

const BASE_URL_API = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  traveSearchList : TravelListUnique[];
  id : string;
  code: string;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  getTravels(){
    return this.http.get<any[]>(`${BASE_URL_API}/api/travels`);
  }

  getTravelDetail(id: string){
    return this.http.get<Travel>(`${BASE_URL_API}/api/travels/GetDetailTravel/${id}`);
  }

  getTravelsSource(departament : string){
    return this.http.get<any[]>(`${BASE_URL_API}/api/travels/GetSourceTravelByIdDepartament/${departament}`);
  }

  getTravelsDate(source : string){
    return this.http.get<any[]>(`${BASE_URL_API}/api/travels/GetDatesTravelByIdSource/${source}`);
  }

  getTravelsForHour(date : string){
    return this.http.get<any[]>(`${BASE_URL_API}/api/travels/GetHoursTravelByIdDate/${date}`);
  }

  getTravelsForCode(code : string){
    return this.http.get<TravelSearch>(`${BASE_URL_API}/api/travels/GetDetailTravelSearch/${code}`);
  }

  searchTravelList(departament : string, source : string, date : string, time : string){   
    return this.http.get<TravelListUnique[]>(`${BASE_URL_API}/api/travels/GetSearchTravel/${departament}/${source}/${date}/${time}`);
  }

  createTravel(data){   
    return this.http.post(`${BASE_URL_API}/api/travelRequests/`, data);
  }

  updateTravel(id, data){   
    return this.http.put(`${BASE_URL_API}/api/travels/AssignmentsTravelDriver/${id}`, data);
  }

  getFilterTravelByIdDriver(id: string){
    return this.http.get<Travel[]>(`${BASE_URL_API}/api/travels/GetFilterTravelByIdDriver/${id}`);
  }

  getFilterTravelByAdmonTercero(companyId: string){
    return this.http.get<Travel[]>(`${BASE_URL_API}/api/travels/GetFilterTravelByAdmonTercero/${companyId}`);
  }

}
