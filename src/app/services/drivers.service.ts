import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DriverList } from '../pages/drivers/models/drivers-list';
import { Driver } from '../pages/drivers/models/driver';
import { DriverUpdate } from '../pages/drivers/models/driver-update';
import { HttpService } from './http/http.service';
import { environment } from 'src/environments/environment.prod';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  id : string;
  driver : Driver;
  driverUpdate : DriverUpdate;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpService) { }

  get refresh$(){
    return this._refresh$;
  }

  createDriver(data: any) {
    return this.http.doPostFormData(`${URL}/api/authentication/CreateUserDriver`, data, {});
  }

  updateDriver(id : string, data: any) {
    return this.http.doPutFormData(`${URL}/api/drivers/${id}`, data, {}).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getDriverById(id : string){
    return this.http.doGet(`${URL}/api/authentication/GetUserDetail/${id}`, {});
  }

  getDriverForUpdate(id : string){
    return this.http.doGet(`${URL}/api/authentication/GetUserInfoForUpdate/${id}`, {});
  }

  getDriverList(id : string){
    return this.http.doGet(`${URL}/api/authentication/GetUserByIdCompany/${id}`, {});
  }
}
