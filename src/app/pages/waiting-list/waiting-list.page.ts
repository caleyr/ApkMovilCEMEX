import { Request } from './models/request';
import { LoginService } from 'src/app/services/auth/login.service';
import { RequestService } from './../../services/request.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.page.html',
  styleUrls: ['./waiting-list.page.scss'],
})
export class WaitingListPage implements OnInit {

  requestsList: Request[] = [];

  suscripcion : Subscription;

  constructor(
    private requestService: RequestService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.suscripcion = this.requestService.refresh$.subscribe(() =>{      
      this.getData();
    })
    this.getData();
  }

  getData() {
    if(this.loginService.profileUser.Roles === 'Conductor'){
      this.requestService.getRequestByIdUser(this.loginService.profileUser.Email).subscribe(data => {
        this.requestsList = data.data;
      })
    }else{
      this.requestService.getRequestByIdCompany(this.loginService.profileUser.CompanyId).subscribe(data => {
        this.requestsList = data.data;
      })
    }    
  }

  doRefresh(event){
    setTimeout(()=>{      
      this.requestsList = [];
      this.getData();
      event.target.complete();
    }, 2000);
  }

}
