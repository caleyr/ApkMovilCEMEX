import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from 'src/app/interfaces/user/user';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { LoginService } from '../../../services/auth/login.service';
import { ApiService } from '../../../services/auth/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  loading = false;
  rol : number = null;

  constructor(
    private apiService : ApiService,
    private location : Location
  ) { }

  async ngOnInit() {
    this.rol = this.apiService.userProfile.RolesId;    
  }

  onBack(){
    this.location.back();
  }

  showLoading(value) {
    this.loading = value;
  }

}
