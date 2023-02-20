import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Vehicle } from '../pages/vehicles/models/vehicle';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpService } from './http/http.service';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  id : number;
  vehicle : Vehicle;

  private _refresh$ = new Subject<void>();

  constructor(private http: HttpService) { }

  get refresh$(){
    return this._refresh$;
  }

  createVehicle(data: any) {
    return this.http.fetch(`${URL}/v1/load/dsm/vehicles`, data, 'post', true);
  }

  updateVehicleTravel(data: any) {
    return this.http.fetch(`${URL}/v1/load/dsm/vehicles`, data, 'put', true);
  }

  updateVehicle(data: any) {
    return this.http.fetch(`${URL}/v1/load/dsm/vehicles`, data, 'put', true).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  updateDocument(id : number , data : any){
    return this.http.fetch(`${URL}/v1/load/dsm/vehicles/${id}/documents`, data, 'upload', true, true, true).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  driverAssignmentVehicle(id : any, data: any){
    return this.http.fetch(`${URL}/api/vehicles/DriverAssignmentVehicle/${id}`, data, 'put', true).pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  getVehicleById(id : any){
    return this.http.fetch(`${URL}/v1/load/dsm/vehicles/${id}`, {}, 'get');
  }

  getVehicleList(id : any){
    return this.http.fetch(`${URL}/v1/load/dsm/vehicles/companies/${id}`, {}, 'get');
  }

  getVehiclesStatus( status : any){
    return this.http.fetch(`${URL}/v1/load/dsm/vehicles/statuses/${status}`, {}, 'get');
  }

  getVehiclesUserByIdCompany(id: number){
    return this.http.fetch(`${URL}/v1/load/dsm/vehicles/companies/${id}`, {}, 'get');
  }
}
