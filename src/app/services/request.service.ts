import { Request } from './../pages/waiting-list/models/request';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpService } from './http/http.service';
import { environment } from 'src/environments/environment.prod';

const BASE_URL_API = environment.url;

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  id : string = null;
  request: Request;
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpService) { }

  get refresh$(){
    return this._refresh$;
  }

  createRequest(data: any){
    return this.http.doPostFormData(`${BASE_URL_API}/api/waitingList/CreateRequestTravel`, data, {});
  }

  updateRequest(id: string, data: any){
    return this.http.doPut(`${BASE_URL_API}/api/waitingList/${id}`, data, {}).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getRequestDetail(id: string){
    return this.http.doGet(`${BASE_URL_API}/api/waitingList/RequestById/${id}`, {});
  }

  getRequestByIdUser(correo: string){
    return this.http.doGet(`${BASE_URL_API}/api/waitingList/GetRequestByIdUser/${correo}`, {});
  }

  getRequests(){
    return this.http.doGet(`${BASE_URL_API}/api/waitingList/`, {});
  }
}
