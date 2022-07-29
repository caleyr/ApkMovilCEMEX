import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DriverList } from '../pages/drivers/models/drivers-list';
import { Driver } from '../pages/drivers/models/driver';
import { DriverUpdate } from '../pages/drivers/models/driver-update';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  id : string;
  driver : Driver;
  driverUpdate : DriverUpdate;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  createDriver(data: any) {
    return this.http.post(`${URL}/api/authentication/CreateUserDriver`, data, {responseType: 'text'});
  }

  updateDriver(id : string, data: any) {
    return this.http.put(`${URL}/api/drivers/${id}`, data, {responseType: 'text'}).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getDriverById(id : string){
    return this.http.get<Driver>(`${URL}/api/authentication/GetUserDetail/${id}`);
  }

  getDriverForUpdate(id : string){
    return this.http.get<DriverUpdate>(`${URL}/api/authentication/GetUserInfoForUpdate/${id}`);
  }

  getDriverList(id : string){
    return this.http.get<DriverList[]>(`${URL}/api/authentication/GetUserByIdCompany/${id}`);
  }
}
