import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vehicle } from '../pages/vehicles/models/vehicle';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  id : string;
  vehicle : Vehicle;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  createVehicle(data: any) {
    return this.http.post(`${URL}/api/vehicles`, data, {responseType: 'text'});
  }

  updateVehicle(id : string, data: any) {
    return this.http.put(`${URL}/api/vehicles/${id}`, data, {responseType: 'text'}).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  driverAssignmentVehicle(id : string, data: any){
    return this.http.put(`${URL}/api/vehicles/DriverAssignmentVehicle/${id}`, data, {responseType: 'text'}).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getVehicleById(id : string){
    return this.http.get<Vehicle>(`${URL}/api/vehicles/${id}`);
  }

  getVehicleList(id : string){
    return this.http.get<Vehicle[]>(`${URL}/api/vehicles/GetVehiclesForUser/${id}`);
  }

  getVehiclesUserByIdCompany(id: string){
    return this.http.get<Vehicle[]>(`${URL}/api/vehicles/GetVehiclesForUser/${id}`);
  }
}
