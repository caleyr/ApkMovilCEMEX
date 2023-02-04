import { Subject } from 'rxjs';
import { Travel } from './../../interfaces/travels/travel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelListUnique } from 'src/app/interfaces/travels/travel-list-unique';
import { TravelSearch } from 'src/app/interfaces/travels/travel-search';
import { HttpService } from '../http/http.service';
import { environment } from 'src/environments/environment.prod';
import { tap, catchError } from 'rxjs/operators';

const BASE_URL_API = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  traveSearchList : Travel[];
  id : string;
  travel: Travel;

  private refresh = new Subject<true>();
  changeDataRefresh = this.refresh.asObservable();

  constructor(private http: HttpService) { }

  changeUpdate(){
    return this.refresh.next(true);
  }

  getTravels(){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/travels`, {}, 'get');
  }

  getTravelDetail(id: string){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/travels/${id}`, {}, 'get');
  }

  getTravelsSource(departament : string){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/travels/departments/${departament}`, {}, 'get');
  }

  getTravelsDate(source : string){
    return this.http.fetch(`${BASE_URL_API}/api/travels/GetDatesTravelByIdSource/${source}`, {}, 'get');
  }

  getTravelsForHour(date : string){
    return this.http.fetch(`${BASE_URL_API}/api/travels/GetHoursTravelByIdDate/${date}`, {}, 'get');
  }

  getTravelsForCode(code : string){
    return this.http.fetch(`${BASE_URL_API}/api/travels/GetDetailTravelSearch/${code}`, {}, 'get');
  }

  searchTravelList(departament : string, source : string, date : string, time : string){   
    return this.http.fetch(`${BASE_URL_API}/api/travels/GetSearchTravel/${departament}/${source}/${date}/${time}`, {}, 'get');
  }

  createTravel(data){   
    return this.http.fetch(`${BASE_URL_API}/api/travelRequests/`, data, 'post', true);
  }

  updateTravel(data){   
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/travels`, data, 'put', true).pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  updateDocument(id : any , data : any){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/travels/${id}/documents`, data, 'upload', true, false, true);
  }

  updateTravelUser(data){   
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/travels`, data, 'put', true);
  }


  updatePointOrigin(id, data){
    return this.http.fetch(`${BASE_URL_API}/api/travels/UpdateLatitudLongitud/${id}`, data, 'put', true);
  }

  startTravel(id, data){   
    return this.http.fetch(`${BASE_URL_API}/api/travels/StarProcessTravelByUser/${id}`, data, 'put', true);
  }

  updateTimeTravel(id, data){
    return this.http.fetch(`${BASE_URL_API}/api/travels/TripRegistrationInProgress/${id}`, data, 'put', true);
  }

  confirmDrive(id : string, data: any){
    return this.http.fetch(`${BASE_URL_API}/api/travels/ConfirmTravelByUser/${id}`, data, 'put', true).pipe(
      tap(() => {
        this.refresh.next();
      })
    )
  }

  getFilterTravelByIdDriver(id: number){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/travels/users/${id}`, {}, 'get' );
  }

  getFilterTravelByAdmonTercero(companyId: number){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/travels/companies/${companyId}`, {}, 'get');
  }

}
