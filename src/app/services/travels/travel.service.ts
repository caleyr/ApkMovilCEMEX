import { Subject } from 'rxjs';
import { Travel } from './../../interfaces/travels/travel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelListUnique } from 'src/app/interfaces/travels/travel-list-unique';
import { TravelSearch } from 'src/app/interfaces/travels/travel-search';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment.prod';
import { tap } from 'rxjs/operators';

const BASE_URL_API = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  traveSearchList : TravelListUnique[];
  id : string;
  code: string;

  private refresh = new Subject<true>();
  changeDataRefresh = this.refresh.asObservable();

  constructor(private http: HttpService) { }

  changeUpdate(){
    return this.refresh.next(true);
  }

  getTravels(){
    return this.http.doGet(`${BASE_URL_API}/api/travels`, {});
  }

  getTravelDetail(id: string){
    return this.http.doGet(`${BASE_URL_API}/api/travels/GetDetailTravel/${id}`, {});
  }

  getTravelsSource(departament : string){
    return this.http.doGet(`${BASE_URL_API}/api/travels/GetSourceTravelByIdDepartament/${departament}`, {});
  }

  getTravelsDate(source : string){
    return this.http.doGet(`${BASE_URL_API}/api/travels/GetDatesTravelByIdSource/${source}`, {});
  }

  getTravelsForHour(date : string){
    return this.http.doGet(`${BASE_URL_API}/api/travels/GetHoursTravelByIdDate/${date}`, {});
  }

  getTravelsForCode(code : string){
    return this.http.doGet(`${BASE_URL_API}/api/travels/GetDetailTravelSearch/${code}`, {});
  }

  searchTravelList(departament : string, source : string, date : string, time : string){   
    return this.http.doGet(`${BASE_URL_API}/api/travels/GetSearchTravel/${departament}/${source}/${date}/${time}`, {});
  }

  createTravel(data){   
    return this.http.doPostFormData(`${BASE_URL_API}/api/travelRequests/`, data, {});
  }

  updateTravel(id, data){   
    return this.http.doPutFormData(`${BASE_URL_API}/api/travels/AssignmentsTravelDriver/${id}`, data, {}).pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  updatePointOrigin(id, data){
    return this.http.doPutFormData(`${BASE_URL_API}/api/travels/UpdateLatitudLongitud/${id}`, data, {});
  }

  startTravel(id, data){   
    return this.http.doPutFormData(`${BASE_URL_API}/api/travels/StarProcessTravelByUser/${id}`, data, {});
  }

  updateTimeTravel(id, data){
    return this.http.doPutFormData(`${BASE_URL_API}/api/travels/TripRegistrationInProgress/${id}`, data, {});
  }

  confirmDrive(id : string, data: any){
    return this.http.doPutFormData(`${BASE_URL_API}/api/travels/ConfirmTravelByUser/${id}`, data, {}).pipe(
      tap(() => {
        this.refresh.next();
      })
    )
  }

  getFilterTravelByIdDriver(id: string){
    return this.http.doGet(`${BASE_URL_API}/api/travels/GetFilterTravelByIdDriver/${id}`, {});
  }

  getFilterTravelByAdmonTercero(companyId: string){
    return this.http.doGet(`${BASE_URL_API}/api/travels/GetFilterTravelByAdmonTercero/${companyId}`, {});
  }

}
