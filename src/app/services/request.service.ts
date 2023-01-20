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
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/waitinglists`, data, 'post', true).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  updateRequest(id: string, data: any){
    return this.http.fetch(`${BASE_URL_API}/api/waitingList/${id}`, data, 'put').pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getRequestDetail(id: string){
    return this.http.fetch(`${BASE_URL_API}/api/waitingList/RequestById/${id}`, {}, 'get');
  }

  getRequestByIdUser(id: any){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/waitinglists/drivers/${id}`, {}, 'get');
  }

  getRequestByIdCompany(idCompany: any){
    return this.http.fetch(`${BASE_URL_API}/v1/load/dsm/waitinglists/companies/${idCompany}`, {}, 'get');
  }

  getRequests(){
    return this.http.fetch(`${BASE_URL_API}/api/waitingList/`, {}, 'get');
  }
}
