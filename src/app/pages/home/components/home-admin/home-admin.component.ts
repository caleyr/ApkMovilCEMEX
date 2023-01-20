import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActiveTabsService } from '../../../../services/active-tabs.service';
import { ApiService } from '../../../../services/auth/api.service';
import { DashboardService } from '../../../../services/dashboard.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss'],
})
export class HomeAdminComponent implements OnInit {

  @Output()
  propagar = new EventEmitter<boolean>();

  linkClever = "https://cemex.sercae.com/sercae/pages/core/login.jsf";
  linkTrip = "https://tuviajecx.com/cemexterceros/login"

  data = {
    travel : {
      statusOne : 0,
      statusTwo : 0,
      statusThree : 0,
      statusFour : 0,
      statusFive : 0,
      statusSix : 0,
      statusSeven : 0,
    },
    user : {
      drive : 0,
      hc : 0,
      adminT : 0,
      adminC : 0,
      superAdmin : 0
    },
    vehicles : 0,
    companies : 0,
    waiting : 0
  }

  constructor(
    private navCtrl : NavController, 
    private activeTabs: ActiveTabsService,
    private apiService : ApiService,
    private dashboardService : DashboardService
    ) { }

  async ngOnInit() {
    this.propagar.emit(true);
    await this.getTravel();
    await this.getUser();
    this.propagar.emit(false);
  }

  getTravel(){
    return new Promise((resolve) =>{
      for (let index = 0; index < 7; index++) {
        this.dashboardService.getTravels(index).subscribe({
          next : (data : any) =>{
            this.getTotalTravel(index, data.data.count);
          },
          complete:() => {
            if(index === 6){
              resolve(true);              
            }
          },
        }) 
      }
    })
  }

  getUser(){
    return new Promise((resolve) =>{
      for (let index = 1; index < 6; index++) {
        this.dashboardService.getUsers(index).subscribe({
          next : (data : any) =>{
            this.getTotalUser(index, data.data.count);
          },
          complete:() => {
            if(index === 5){
              resolve(true);              
            }
          },
        }) 
      }
    })
  }

  getTotalTravel(number, result) {
    switch (number) {
      case 0:
        this.data.travel.statusOne = result;
        break;
      case 1:
        this.data.travel.statusTwo = result;
        break;
      case 2:
        this.data.travel.statusThree = result;
        break;
      case 3:
        this.data.travel.statusFour = result;
        break;
      case 4:
        this.data.travel.statusFive = result;
        break;
      case 5:
        this.data.travel.statusSix = result;
        break;
      case 6:
        this.data.travel.statusSeven = result;
        break;
      default:
        break;
    }
  }

  getTotalUser(number, result) {
    switch (number) {
      case 1:
        this.data.user.drive = result;
        break;
      case 2:
        this.data.user.hc = result;
        break;
      case 3:
        this.data.user.adminT = result;
        break;
      case 4:
        this.data.user.adminC = result;
        break;
      case 5:
        this.data.user.superAdmin = result;
        break;
      default:
        break;
    }
  }

  getTravelD(){
    return this.data.travel.statusThree + this.data.travel.statusFour;
  }

  getTravelE(){
    return this.data.travel.statusFive + this.data.travel.statusSix + this.data.travel.statusSeven;
  }



  getTravelP(){
    return this.data.travel.statusFour + this.data.travel.statusFive; 
  }

  getTravelF(){
    return this.data.travel.statusSeven + this.data.travel.statusSix;
  }

  onUrl(url : string){
    window.open(url, '_system', 'location=yes , noopener');
  }

  onClickTravel(){
    this.navCtrl.navigateRoot(['/app/travels'])
  }

  onClickMyTravel(){
    this.navCtrl.navigateRoot(['/app/my-travels'])
  }
}
