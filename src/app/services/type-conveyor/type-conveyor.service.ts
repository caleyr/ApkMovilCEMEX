import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class TypeConveyorService {

  constructor(
    private http: HttpService,
  ) { }

  public getTypeConveyor() {
    return this.http.doGet(`${URL}/api/type-conveyor/list-type-conveyors`);
  }
}
