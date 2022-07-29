import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TravelService } from '../../services/travels/travel.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.page.html',
  styleUrls: ['./travels.page.scss'],
})
export class TravelsPage implements OnInit {

  sourceList : string[] = [];
  departamentList : string[] = [];
  dateList : string[] = [];
  timeList : string[] = [];

  source : string;
  departament : string;
  dataO : string;
  timeO : string;

  buttonActivate : boolean = false;

  constructor(
    private travelService : TravelService,
    private navCtrl : NavController
    ) { }

  ngOnInit() {
    this.getListDepartament();
  }

  getListDepartament(){
    this.travelService.getTravels().subscribe(data=>{
      this.departamentList = [...new Set(data.map(item => item.departamentSource))];
    });
  }

  changeDepartament(event){
    if(event.detail.value == 0){
      this.sourceList = [];
      this.timeList = [];
      this.dateList = [];
      
      this.departament = '';
      this.source = '';
      this.dataO = '';
      this.timeO = '';
    }else{
      this.departament = event.detail.value;
      this.travelService.getTravelsSource(event.detail.value).subscribe(data=>{
        this.sourceList = [...new Set(data.map(item => item.source))];
      });
    }    
  }
  
  changeSource(event){
    if(event.detail.value == 0){
      this.timeList = [];
      this.dateList = [];

      this.source = '';
      this.dataO = '';
      this.timeO = '';
    }else{
      this.source = event.detail.value;
      this.travelService.getTravelsDate(event.detail.value).subscribe(data=>{
        this.dateList = [...new Set(data.map(item => item.dateTravel))];
      });
    }    
  }

  changeDate(event){
    if(event.detail.value == 0){
      this.timeList = [];
      this.dataO = '';
      this.timeO = '';
    }else{
      this.dataO = event.detail.value;
      this.travelService.getTravelsForHour(event.detail.value).subscribe(data=>{
        this.timeList = [...new Set(data.map(item => item.timerStar))];
      });
    }
  }

  changeHour(event){
    if(event.detail.value == 0){
      this.buttonActivate = false;
    }else{
      this.timeO = event.detail.value;     
      this.buttonActivate = true;
    }
  }

  async searchTrips(){
    const list = await this.getTravelListSearch();
    if(list){
      this.navCtrl.navigateRoot('/app/travels/search-list', { animated: false });
    }
  }

  getTravelListSearch(){
    return new Promise((resolved, reject)=>{
      this.travelService.searchTravelList(this.departament, this.source, this.dataO, this.timeO).subscribe(data=>{
        this.travelService.traveSearchList = data;
        resolved(data);
      })
    });    
  }
}
