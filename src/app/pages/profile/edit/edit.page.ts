import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from 'src/app/interfaces/user/user';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  loading = false;
  rol = '';

  constructor(
    private loginService : LoginService
  ) { }

  async ngOnInit() {
    this.rol = this.loginService.profileUser.Roles;
    console.log(this.loginService.profileUser);
    
  }

}
