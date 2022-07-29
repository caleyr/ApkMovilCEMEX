import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { Subscription } from 'rxjs';
import { VehiclesService } from '../../../services/vehicles.service';
import { NavController } from '@ionic/angular';
import { LoginService } from '../../../services/auth/login.service';
import { DriversService } from '../../../services/drivers.service';
import { DriverList } from '../../drivers/models/drivers-list';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VehicleDetailsPage implements OnInit {
  
  id : string;
  rol : string = null;
  company : string;
  vehicle : Vehicle = new Vehicle();
  driverList :  DriverList[] = [];
  suscripcion : Subscription;

  addDriver = false;
  alertShow = false;
  driverAssign : string;

  constructor(
    private location : Location,
    private vehiclesService : VehiclesService,
    private loginService : LoginService,
    private navCtrl : NavController,
    private driversService : DriversService
    ) { 
      this.rol = this.loginService.profileUser.Roles
    }

  ngOnInit() {
    this.suscripcion = this.vehiclesService.refresh$.subscribe(() =>{
      this.getData();
    });
    this.getData();
  }

  onBack(){
    this.location.back();
  }

  closeAlertConfirm(){
    this.addDriver = false;
  }

  closeAlertSuccess(){
    this.alertShow = false;
  }

  cwcChangeDrivers(event){
    this.driverAssign = event.detail.value;
  }

  openModal(){
    this.addDriver = true;
  }

  addDriverForVehicle(){
    const data : FormData = new FormData();
    data.append('LicenseVehiculo', this.vehicle.licenseVehiculo);
    data.append('UserId', this.driverAssign);
    this.vehiclesService.driverAssignmentVehicle(this.id, data).subscribe(data=>{
      this.alertShow = true;
    });
  }

  getData(){
    if(this.vehiclesService.id !== null){
      this.id = this.vehiclesService.id;
      this.driversService.getDriverList(this.loginService.profileUser.CompanyId).subscribe(result =>{
        this.driverList = result;
      })
      this.vehiclesService.getVehicleById(this.id).subscribe(data=>{
        this.vehicle = data;
      });
    }    
  }

  updateVehicle(){
    this.vehiclesService.vehicle = this.vehicle;
    this.navCtrl.navigateRoot('/app/vehiculos/actualizar', { animated : false });
  }
}
