import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { identity, Subscription } from 'rxjs';
import { VehiclesService } from '../../../services/vehicles.service';
import { NavController } from '@ionic/angular';
import { LoginService } from '../../../services/auth/login.service';
import { DriversService } from '../../../services/drivers.service';
import { DriverList } from '../../drivers/models/drivers-list';
import { ApiService } from '../../../services/auth/api.service';
import { Driver } from '../../drivers/models/driver';
import { UserDetail } from '../../../models/user-detail.model';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.page.html',
  styleUrls: ['./vehicle-details.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VehicleDetailsPage implements OnInit {

  id: number;
  rol: number;
  company: string;
  vehicle: Vehicle;
  driverList: UserDetail[] = [];
  suscripcion: Subscription;

  idTercero: number;

  addDriver = false;
  alertShow = false;
  driverAssign: string;

  loading = false;

  roleOk: boolean;
  role: string = 'Conductor';

  constructor(
    private location: Location,
    private vehiclesService: VehiclesService,
    private navCtrl: NavController,
    private driversService: DriversService,
    private apiService: ApiService
  ) {
    this.rol = this.apiService.userProfile.RolesId;
    this.idTercero = this.apiService.userProfile.UserId;
  }

  async ngOnInit() {
    this.loading = true;
    this.suscripcion = this.vehiclesService.refresh$.subscribe(async () => {
      this.loading = true;
      this.getData();

    });
    this.getData();
  }

  onBack() {
    this.location.back();
  }

  closeAlertConfirm() {
    this.addDriver = false;
  }

  closeAlertSuccess() {
    this.alertShow = false;
  }

  cwcChangeDrivers(event) {
    this.driverAssign = event.detail;
  }

  openModal() {
    this.addDriver = true;
  }

  addDriverForVehicle() {
    this.closeAlertConfirm();
    this.loading = true;
    const data: FormData = new FormData();
    data.append('VehicleId', this.vehicle.VehicleId.toString());
    data.append('LicenseVehiculo', this.vehicle.LicenseVehiculo);
    data.append('StatusVehicle', '1');
    data.append('UserId', this.driverAssign);
    this.vehiclesService.updateVehicle(data).subscribe({
      complete: () => {
        this.loading = false;
        this.alertShow = true;
        setTimeout(() => {
          this.alertShow = false;
          this.onBack();
        }, 3000);
      }
    });
  }

  getData() {
    if (this.vehiclesService.id !== null) {
      this.id = this.vehiclesService.id;
      this.driversService.getDriverList(this.apiService.userProfile.CompanyId).subscribe(result => {
        this.driverList = result.data.filter(data => data.RolesId !== 4 && data.RolesId !== 5 && data.RolesId !== 3 && data.StatusTravel === 0 && data.VehicleId === 0 && data.UserId !== this.apiService.userProfile.UserId);
      });
      this.vehiclesService.getVehicleById(this.id).subscribe({
        next: (data: any) => {
          this.vehicle = data.data;
        },
        complete: async () => {
          await this.checkRole();
        }
      });
    }
  }

  updateVehicle() {
    this.vehiclesService.vehicle = this.vehicle;
    this.navCtrl.navigateRoot('/app/vehiculos/actualizar', { animated: false });
  }

  updataDocuments() {
    this.navCtrl.navigateRoot('/app/vehiculos/actualizar-documentos', { animated: false });
  }

  checkRole() {
    return new Promise<boolean>((resolve) => {
      this.driversService.getDriverById(this.vehicle.UserId).subscribe({
        next : (result) => {
          if (result.data[0].RolesId === 3) {
            this.roleOk = false;
          } else if(result.data[0].RolesId === 2){
            this.role = 'Hombre Camión';
            this.roleOk = true;
          } else {
            this.roleOk = true;
          }
           
          resolve(true);
        }, 
        error : () => {
          resolve(true);
        },
        complete : () => {
          this.loading = false;
        }, 
      });
    });
  }
}
