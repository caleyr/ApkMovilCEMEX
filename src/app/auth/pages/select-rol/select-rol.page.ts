import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/auth/login.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-rol',
  templateUrl: './select-rol.page.html',
  styleUrls: ['./select-rol.page.scss'],
})
export class SelectRolPage implements OnInit {

  constructor(
    private loginService : LoginService,
    private navCtrl : NavController
    ) { }

  ngOnInit() {
  }

  onClickPassword(rol){
    this.loginService.rol = rol;    
    this.navCtrl.navigateRoot('/login', {animated:true});
  }

}
