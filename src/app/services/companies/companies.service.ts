import { Injectable } from '@angular/core';
import { Companies } from '../../interfaces/companies/companies';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpService } from '../http/http.service';
const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(
    private http: HttpService,
  ) { }

  getCompanies(){
    return this.http.doGet(`${URL}/api/companies`, {'Content-Type': 'application/json'});
  }

  getCompany(id : string) {
    return this.http.doGet(`${URL}/api/companies/${id}`, {'Content-Type': 'application/json'});
  }

}
