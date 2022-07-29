import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Companies } from '../../interfaces/companies/companies';
import { Observable } from 'rxjs';
const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(
    private http: HttpClient,
  ) { }

  getCompanies(){
    return this.http.get<Companies[]>(`${URL}/api/companies`);
  }

  getCompany(id : string) {
    return this.http.get<Companies>(`${URL}/api/companies/${id}`);
  }

}
