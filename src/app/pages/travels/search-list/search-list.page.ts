import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TravelListUnique } from '../../../interfaces/travels/travel-list-unique';
import { TravelService } from '../../../services/travels/travel.service';
import { NavController } from '@ionic/angular';
import { Travel } from '../../../interfaces/travels/travel';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.page.html',
  styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit {

  listSearch : Travel[] = []

  constructor(
    private location : Location,
    private travelService : TravelService,
    private navCtrl : NavController
    ) { }

  ngOnInit() {
    this.listSearch = this.travelService.traveSearchList.sort((a, b) => Date.parse( '1/01/2023 ' + a.TimerStar) - Date.parse( '1/01/2023 ' + b.TimerStar));
  }

  onBack(){
    this.location.back();
  }

  detailTravel(travel){
    this.travelService.travel = travel; 
    this.navCtrl.navigateRoot('/app/travels/detail-search', { animated: false });
  }

}
