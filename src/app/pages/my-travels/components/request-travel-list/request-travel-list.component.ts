import { NavController } from '@ionic/angular';
import { TravelService } from './../../../../services/travels/travel.service';
import { Travel } from './../../../../interfaces/travels/travel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-travel-list',
  templateUrl: './request-travel-list.component.html',
  styleUrls: ['./request-travel-list.component.scss'],
})
export class RequestTravelListComponent implements OnInit {

  @Input() tripsList: Travel[];
  
  constructor(private travelService: TravelService,
    private navCtrl: NavController) { }

  ngOnInit() {}

  detailTrip(code: string){
    this.travelService.code = code;
    this.navCtrl.navigateRoot('/app/my-travels/previous-details', {animated:false});
  }

}
