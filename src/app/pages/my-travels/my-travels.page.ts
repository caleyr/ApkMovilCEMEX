import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-my-travels',
  templateUrl: './my-travels.page.html',
  styleUrls: ['./my-travels.page.scss'],
})
export class MyTravelsPage implements OnInit {

  rol : string = null;

  constructor(
    private loginService : LoginService
  ) { }

  ngOnInit() {
    this.rol = this.loginService.profileUser.Roles;
  }

}
