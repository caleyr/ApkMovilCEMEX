import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../../../services/travels/travel.service';
import { TravelSearch } from '../../../interfaces/travels/travel-search';
import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.page.html',
  styleUrls: ['./detail-search.page.scss'],
})
export class DetailSearchPage implements OnInit {

  codeTravel : string;
  alertShow = false;
  rol = null;
  travel : TravelSearch = new TravelSearch();
  constructor(    
    private loginService : LoginService,
    private location : Location,
    private travelService : TravelService
    ) { }

  ngOnInit() {
    this.rol = this.loginService.profileUser.Roles;
    console.log(this.rol);    
    this.codeTravel = this.travelService.code;
    this.getData(this.codeTravel);
  }

  getData(code){
    this.travelService.getTravelsForCode(code).subscribe(data=>{
      this.travel = data;
    });
  }
  
  onBack(){
    this.location.back();
  }

  onClickCreateRequestDrive(){
    const dataForm = new FormData();
    dataForm.append('StatusRequestTravels', '1');
    dataForm.append('DriverId', this.loginService.profileUser.id);
    dataForm.append('TravelId', this.travel.id);
    this.travelService.createTravel(dataForm).subscribe(data=>{
      this.alertShow = true;
    });
  }

  openSelectDrive(){
    
  }


  onClickCreateRequestAdmin(id){
    const dataForm = new FormData();
    dataForm.append('StatusRequestTravels', '1');
    dataForm.append('DriverId', id);
    dataForm.append('TravelId', this.travel.id);

    this.travelService.createTravel(dataForm).subscribe();
    this.alertShow = true;
  }

}
