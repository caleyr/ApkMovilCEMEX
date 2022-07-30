import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TravelListUnique } from '../../../interfaces/travels/travel-list-unique';
import { TravelService } from '../../../services/travels/travel.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.page.html',
  styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit {

  listSearch : TravelListUnique[] = []

  constructor(
    private location : Location,
    private travelService : TravelService,
    private navCtrl : NavController
    ) { }

  ngOnInit() {
    this.listSearch = this.travelService.traveSearchList;
  }

  onBack(){
    this.location.back();
  }

  detailTravel(codeTravel){
    this.travelService.code = codeTravel;
    console.log(this.travelService.code);    
    this.navCtrl.navigateRoot('/app/travels/detail-search', { animated: false });
  }

}
