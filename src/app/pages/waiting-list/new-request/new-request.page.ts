import { LoginService } from 'src/app/services/auth/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.page.html',
  styleUrls: ['./new-request.page.scss'],
})
export class NewRequestPage implements OnInit {

  rol: string

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.rol = this.loginService.profileUser.Roles;
  }

}
