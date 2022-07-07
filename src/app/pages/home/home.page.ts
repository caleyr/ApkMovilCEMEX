import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  rol : string;
  
  constructor(private loginService : LoginService) {
   }

  ngOnInit() {
    this.rol = this.loginService.profileUser.Roles;
  }

}
