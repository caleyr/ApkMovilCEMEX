import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { Subscription } from 'rxjs';
import { DriversService } from '../../../services/drivers.service';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { VehiclesService } from '../../../services/vehicles.service';
import { Driver } from '../models/driver';
import { CompaniesService } from '../../../services/companies/companies.service';
import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.page.html',
  styleUrls: ['./driver-details.page.scss'],
})
export class DriverDetailsPage implements OnInit {

  id : string;
  driver : Driver = new Driver();
  company : string;
  suscripcion : Subscription;

  constructor(
    private location : Location,
    private driversService : DriversService,
    private navCtrl : NavController,
    ) { }

  ngOnInit() {
    this.suscripcion = this.driversService.refresh$.subscribe(() =>{
      this.getData();
    });
    this.getData();
  }

  onBack(){
    this.location.back();
  }

  getData(){
    this.id = this.driversService.id;
    this.driversService.getDriverById(this.driversService.id).subscribe(data=>{
      this.driver = data.data;
    });
  }

  updateVehicle(){
    this.driversService.getDriverForUpdate(this.id).subscribe(data=>{
      this.driversService.driverUpdate = data.data;
      this.navCtrl.navigateRoot('/app/conductores/actualizar', { animated : false });
    });
  }
}
