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
import { UserDetail } from '../../../models/user-detail.model';
import { TextResponseService } from '../../../services/text-response.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.page.html',
  styleUrls: ['./driver-details.page.scss'],
})
export class DriverDetailsPage implements OnInit {

  id: number;
  driver: UserDetail;
  suscripcion: Subscription;

  loading = false;

  constructor(
    private location: Location,
    private driversService: DriversService,
    private navCtrl: NavController,
    public textResp : TextResponseService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.suscripcion = this.driversService.refresh$.subscribe(() => {
      this.loading = true;
      this.getData();
    });
    this.getData();
  }

  onBack() {
    this.location.back();
  }

  getData() {
    this.id = this.driversService.id;
    this.driversService.getDriverById(this.driversService.id).subscribe({
      next : (data : any) =>{
        this.driver = data.data[0];
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  updateVehicle() {
    this.driversService.driver = this.driver;
    this.navCtrl.navigateRoot('/app/conductores/actualizar', { animated: false });
  }

  updataDocuments(){
    this.navCtrl.navigateRoot('/app/conductores/actualizar-documentos', { animated: false });
  }
}
