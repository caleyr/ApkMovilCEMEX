import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { ApiService } from '../../services/auth/api.service';

@Component({
  selector: 'app-my-travels',
  templateUrl: './my-travels.page.html',
  styleUrls: ['./my-travels.page.scss'],
})
export class MyTravelsPage implements OnInit {

  rol : number = null;
  loading = true;

  constructor(
    private apiService : ApiService
  ) { }

  ngOnInit() {
    this.rol = this.apiService.userProfile.RolesId;
  }

  showLoading(value) {
    this.loading = value;
  }
}
