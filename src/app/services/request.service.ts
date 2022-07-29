import { Request } from './../pages/waiting-list/models/request';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

const BASE_URL_API = environment.url;

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  id : string = null;
  request: Request;
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  createRequest(data: any){
    return this.http.post(`${BASE_URL_API}/api/waitingList/`, data, {responseType: 'text'});
  }

  updateRequest(id: string, data: any){
    return this.http.put(`${BASE_URL_API}/api/waitingList/${id}`, data, {responseType: 'text'}).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getRequestDetail(id: string){
    return this.http.get<Request>(`${BASE_URL_API}/api/waitingList/RequestById/${id}`);
  }

  getRequestByIdUser(correo: string){
    return this.http.get<Request[]>(`${BASE_URL_API}/api/waitingList/GetRequestByIdUser/${correo}`);
  }

  getRequests(){
    return this.http.get<Request[]>(`${BASE_URL_API}/api/waitingList/`);
  }

  deleteRequest(id: string){
    return this.http.delete(`${BASE_URL_API}/api/waitingList/${id}`);
  }
}
