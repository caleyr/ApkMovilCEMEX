import { Injectable } from '@angular/core';
import { Companies } from '../../interfaces/companies/companies';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpService } from '../http/http.service';
const URL = environment.url;
const token = environment.token;


@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(
    private http: HttpService,
  ) { }

  getCompanies(){
    return this.http.fetch(`${URL}/v1/load/dsm/companies`, {}, 'get');
  }

  getCompany(id : any) {
    return this.http.fetch(`${URL}/api/companies/${id}`, {}, 'get');
  }

}
