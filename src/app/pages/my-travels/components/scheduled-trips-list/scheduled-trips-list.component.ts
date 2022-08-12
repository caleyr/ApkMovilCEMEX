import { LoginService } from './../../../../services/auth/login.service';
import { NavController } from '@ionic/angular';
import { TravelService } from './../../../../services/travels/travel.service';
import { Travel } from './../../../../interfaces/travels/travel';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scheduled-trips-list',
  templateUrl: './scheduled-trips-list.component.html',
  styleUrls: ['./scheduled-trips-list.component.scss'],
})
export class ScheduledTripsListComponent implements OnInit {

  rol: string;

  @Input() tripsList: Travel[];
  @Input() sizeList: number;

  constructor(private travelService: TravelService,
    private loginService: LoginService,
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
    this.rol = this.loginService.profileUser.Roles;
  }

  detailTrip(id: string, travelAvailability: string) {
    if (this.rol !== 'Administrador Logistico Tercero') {
      if(travelAvailability === 'Asignado' || travelAvailability === 'Confirmado' || travelAvailability === '-'){
        this.travelService.id = id;
        this.navCtrl.navigateRoot('/app/my-travels/driver-confirmed-trip-detail', { animated: false });
      }
    } else {
      this.travelService.id = id;
      this.navCtrl.navigateRoot('/app/my-travels/scheduled-details', { animated: false });
    }
  }

}
