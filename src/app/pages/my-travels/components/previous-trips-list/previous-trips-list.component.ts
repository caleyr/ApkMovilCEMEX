import { NavController } from '@ionic/angular';
import { TravelService } from './../../../../services/travels/travel.service';
import { Travel } from './../../../../interfaces/travels/travel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-trips-list',
  templateUrl: './previous-trips-list.component.html',
  styleUrls: ['./previous-trips-list.component.scss'],
})
export class PreviousTripsListComponent implements OnInit {

  @Input() tripsList: Travel[];

  constructor(private travelService: TravelService,
    private navCtrl: NavController) { }

  ngOnInit() {}

  detailTrip(id: string){
    this.travelService.id = id;
    this.navCtrl.navigateRoot('/app/my-travels/previous-details', {animated:true});
  }

}
