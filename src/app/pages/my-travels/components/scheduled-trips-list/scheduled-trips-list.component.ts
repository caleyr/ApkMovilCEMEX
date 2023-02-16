import { LoginService } from './../../../../services/auth/login.service';
import { NavController } from '@ionic/angular';
import { TravelService } from './../../../../services/travels/travel.service';
import { Travel } from './../../../../interfaces/travels/travel';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/auth/api.service';
import { TextResponseService } from '../../../../services/text-response.service';

@Component({
  selector: 'app-scheduled-trips-list',
  templateUrl: './scheduled-trips-list.component.html',
  styleUrls: ['./scheduled-trips-list.component.scss'],
})
export class ScheduledTripsListComponent implements OnInit {

  rol: number;

  currentDate = new Date();

  @Input() tripsList: Travel[];
  @Input() sizeList: number;
  @Input() searchFilter: string;

  constructor(
    private travelService: TravelService,
    private apiService : ApiService,
    private navCtrl: NavController,
    private router: Router,
    public textResp : TextResponseService
    ) { }

  ngOnInit() {
    this.rol = this.apiService.userProfile.RolesId;
  }

  detailTrip(id: string, travelAvailability: number, tTravel: string) {
    if (this.rol !== 3) {
      if(travelAvailability === 2 || travelAvailability === 3  || travelAvailability === 4 || travelAvailability === 5 ){ 
        this.travelService.id = id;
        if(tTravel === 'Viaje Cemex'){
          this.navCtrl.navigateRoot('/app/my-travels/driver-confirmed-trip-cemex-detail', { animated: false });
        }else{
          this.navCtrl.navigateRoot('/app/my-travels/driver-confirmed-trip-detail', { animated: false });
        }
      }
    } else {
      this.travelService.id = id;
      this.navCtrl.navigateRoot('/app/my-travels/scheduled-details', { animated: false });
    }
  }

}
