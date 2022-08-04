import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../../../services/travels/travel.service';
import { TravelSearch } from '../../../interfaces/travels/travel-search';
import { LoginService } from '../../../services/auth/login.service';
import { DriversService } from '../../../services/drivers.service';
import { DriverList } from '../../drivers/models/drivers-list';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.page.html',
  styleUrls: ['./detail-search.page.scss'],
})
export class DetailSearchPage implements OnInit {

  codeTravel : string;
  
  alertShow = false;
  addDriver = false;

  rol = null;
  travel : TravelSearch = new TravelSearch();
  driverList :  DriverList[] = [];
  driverAssign : string = null;
  driverValidate : boolean = true;

  constructor(    
    private loginService : LoginService,
    private location : Location,
    private travelService : TravelService,
    private driversService : DriversService,
    private navCtrl : NavController
    ) { }

  ngOnInit() {
    this.rol = this.loginService.profileUser.Roles;
    console.log(this.rol);    
    this.codeTravel = this.travelService.code;
    this.getData(this.codeTravel);
  }

  getData(code){
    this.travelService.getTravelsForCode(code).subscribe(data=>{
      this.travel = data.data;
    });
    this.driversService.getDriverList(this.loginService.profileUser.CompanyId).subscribe(result =>{
      this.driverList = result.data;
    })
  }
  
  onBack(){
    this.location.back();
  }

  closeAlertConfirm(){
    this.driverAssign = null;
    this.driverValidate = true;
    this.addDriver = false;
  }

  closeModalOk(){
    this.alertShow = false;
    this.navCtrl.navigateBack('/app/travels', { animated: false });
  }

  openModal(){
    this.addDriver = true;
  }

  cwcChangeDrivers(event){
    this.driverAssign = event.detail.value;    
    this.driverValidate = false;
  }

  async onClickCreateRequest(){
    const dataFormC = new FormData();
    dataFormC.append('StatusRequestTravels', '1');
    dataFormC.append('DriverId', this.loginService.profileUser.id);
    dataFormC.append('TravelId', this.travel.id);
    await this.createTravel(dataFormC);

    const dataFormU = new FormData();    
    dataFormU.append('Id', this.travel.id);
    dataFormU.append('UserId', this.loginService.profileUser.id);
    await this.updateTravel(this.travel.id ,dataFormU);
    this.addDriver = false;
    this.alertShow = true;
  }

  createTravel(dataForm){
    return new Promise((resolve)=>{
      this.travelService.createTravel(dataForm).subscribe(data=>{
        resolve(data);
      });
    });
  }

  updateTravel(id, dataForm){
    return new Promise((resolve)=>{
      this.travelService.updateTravel(id, dataForm).subscribe(data=>{
        resolve(data);
      });
    });
  }
}
