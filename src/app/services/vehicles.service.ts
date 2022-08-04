import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vehicle } from '../pages/vehicles/models/vehicle';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { HttpService } from './http/http.service';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  id : string;
  vehicle : Vehicle;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpService) { }

  get refresh$(){
    return this._refresh$;
  }

  createVehicle(data: any) {
    return this.http.doPost(`${URL}/api/vehicles`, data, {});
  }

  updateVehicle(id : string, data: any) {
    return this.http.doPutFormData(`${URL}/api/vehicles/${id}`, data, {}).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  driverAssignmentVehicle(id : string, data: any){
    return this.http.doPutFormData(`${URL}/api/vehicles/DriverAssignmentVehicle/${id}`, data, {}).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getVehicleById(id : string){
    return this.http.doGet(`${URL}/api/vehicles/${id}`, {});
  }

  getVehicleList(id : string){
    return this.http.doGet(`${URL}/api/vehicles/GetVehiclesForUser/${id}`, {});
  }

  getVehiclesUserByIdCompany(id: string){
    return this.http.doGet(`${URL}/api/vehicles/GetVehiclesForUser/${id}`, {});
  }
}
