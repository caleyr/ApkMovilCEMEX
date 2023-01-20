import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DriverList } from '../pages/drivers/models/drivers-list';
import { Driver } from '../pages/drivers/models/driver';
import { DriverUpdate } from '../pages/drivers/models/driver-update';
import { HttpService } from './http/http.service';
import { environment } from 'src/environments/environment.prod';
import { UserDetail } from '../models/user-detail.model';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  id : number;
  driver : UserDetail;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpService) { }

  get refresh$(){
    return this._refresh$;
  }

  createDriver(data: any) {
    return this.http.fetch(`${URL}/api/authentication/CreateUserDriver`, data, 'post', true);
  }

  updateDriver(data: any) {
    return this.http.fetch(`${URL}/v1/load/dsm/users`, data, 'put', true).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  confirmDrive(id : string, data: any){
    return this.http.fetch(`${URL}/api/travels/ConfirmTravelByUser/${id}`, data, 'put', true).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getDriverById(id : any){
    return this.http.fetch(`${URL}/v1/load/dsm/users/${id}`, {} , 'get');
  }

  getDriverForUpdate(id : any){
    return this.http.fetch(`${URL}/api/authentication/GetUserInfoForUpdate/${id}`, {} , 'get');
  }

  getDriverList(id : any){
    return this.http.fetch(`${URL}/v1/load/dsm/users/companies/${id}/statuses/2`, {} , 'get');
  }
}
