import { LoginService } from 'src/app/services/auth/login.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../../services/auth/api.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.page.html',
  styleUrls: ['./new-request.page.scss'],
})
export class NewRequestPage implements OnInit {

  loading = false;

  rol: number;

  constructor(
    private apiService : ApiService,
    private navCtrl : NavController
    ) { }

  ngOnInit() {
    this.rol = this.apiService.userProfile.RolesId;
  }

  onBack(){
    this.navCtrl.back();
  }

  showLoading(value) {
    this.loading = value;
  }

}
