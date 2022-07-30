import { Request } from './models/request';
import { LoginService } from 'src/app/services/auth/login.service';
import { RequestService } from './../../services/request.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.page.html',
  styleUrls: ['./waiting-list.page.scss'],
})
export class WaitingListPage implements OnInit {

  requestsList: Request[];

  length: number;

  constructor(private router: Router,
    private requestService: RequestService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.requestService.getRequestByIdUser(this.loginService.profileUser.Email).subscribe(data => {
      this.requestsList = data;
    })
  }

}
