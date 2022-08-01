import { NavController } from '@ionic/angular';
import { TravelService } from './../../../../services/travels/travel.service';
import { Travel } from './../../../../interfaces/travels/travel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled-trips-list',
  templateUrl: './scheduled-trips-list.component.html',
  styleUrls: ['./scheduled-trips-list.component.scss'],
})
export class ScheduledTripsListComponent implements OnInit {

  @Input() tripsList: Travel[];

  constructor(private travelService: TravelService,
    private navCtrl: NavController) { }

  ngOnInit() {}

  detailTrip(code: string){
    this.travelService.code = code;
    this.navCtrl.navigateRoot('/app/my-travels/scheduled-details', {animated:false});
  }

}
