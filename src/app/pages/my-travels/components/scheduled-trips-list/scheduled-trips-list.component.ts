import { LoginService } from './../../../../services/auth/login.service';
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

  rol: string;

  @Input() tripsList: Travel[];

  constructor(private travelService: TravelService,
    private loginService: LoginService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.rol = this.loginService.profileUser.Roles;
  }

  detailTrip(code: string){
    if(this.rol !== 'Conductor'){
      this.travelService.code = code;
      this.navCtrl.navigateRoot('/app/my-travels/scheduled-details-driver', {animated:false});
    }else{
      this.travelService.code = code;
      this.navCtrl.navigateRoot('/app/my-travels/scheduled-details', {animated:false});
    }
  }

}
