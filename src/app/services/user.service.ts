import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpService } from './http/http.service';

const BASE_URL_API = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpService) { }

  getUserDetail(id : string) {
    return this.http.doGet(`${BASE_URL_API}/api/authentication/GetUserDetail/${id}`, {});    
  }
}
