import { Location } from '@angular/common';
import { TravelService } from './../../../services/travels/travel.service';
import { Travel } from './../../../interfaces/travels/travel';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { VehiclesService } from '../../../services/vehicles.service';
import { DriverList } from '../../drivers/models/drivers-list';
import { DriversService } from '../../../services/drivers.service';
import { Subscription } from 'rxjs';
import { LoginService } from '../../../services/auth/login.service';
import { ApiService } from '../../../services/auth/api.service';
import { UserDetail } from '../../../models/user-detail.model';
import { Vehicle } from '../../vehicles/models/vehicle';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-details-trip-request',
  templateUrl: './details-trip-request.page.html',
  styleUrls: ['./details-trip-request.page.scss'],
})
export class DetailsTripRequestPage implements OnInit {

  id: string;
  idUser: number;
  travel: Travel;

  loading = false;

  listDrivers: Vehicle[] = [];
  driveSelected: string = 'Seleccionar';
  driverId: string;
  licenseOk: boolean = true;

  messageShowA: boolean = false;
  messageShow: boolean = false;

  suscripcion: Subscription;

  constructor(
    private location: Location,
    private travelService: TravelService,
    private userService: UserService,
    private vehiclesService: VehiclesService,
    private apiService: ApiService
  ) {
    this.idUser = apiService.userProfile.UserId;
  }

  ngOnInit() {
    this.loading = true;
    this.suscripcion = this.travelService.changeDataRefresh.subscribe(() => {
      this.loading = true;
      this.getData();
      this.getListDrivers();
    });
    this.getData();
    this.getListDrivers();
  }

  onBack() {
    this.location.back();
  }

  getListDrivers() {
    this.vehiclesService.getVehiclesUserByIdCompany(this.apiService.userProfile.CompanyId).subscribe(data => {
      this.listDrivers = data.data.filter(data => data.StatusTravel === 0  && data.Status === 2 && data.UserId !== this.idUser);
      this.loading = false;
    });
  }

  getData() {
    if (this.travelService.id !== null) {
      this.id = this.travelService.id;
      this.travelService.getTravelDetail(this.id).subscribe(data => {
        this.travel = data.data;
      });
    }
  }

  showModal() {
    document.getElementById('modal-assign-trip').setAttribute('open', 'true');
  }

  changeDriver(event) {
    if (event.detail.value === '0') {
      this.driverId = undefined
      this.driveSelected = 'Seleccionar';
      this.licenseOk = true;
    } else {
      const drive = this.listDrivers.filter(data => data.VehicleId === parseInt(event.detail.value))[0];
      this.driveSelected = drive.LicenseVehiculo;
      this.driverId = drive.UserId.toString();
      this.licenseOk = false;
    }
  }

  driverAssign() {
    this.loading = true;
    const dataD = new FormData();
    dataD.append('TraveId', this.travel.TraveId);
    dataD.append('UserId', this.driverId);
    dataD.append('LicenseVehiculo', this.driveSelected)
    dataD.append('StatusTravelAvailability', '2');
    dataD.append('StatusTravel', '2');
    this.travelService.updateTravel(dataD).subscribe(() => {
      this.loading = false;
      document.getElementById('modal-assign-trip').setAttribute('open', 'false');
      this.messageShowA = true;
    }, (err) => {
      document.getElementById('modal-assign-trip').setAttribute('open', 'false');
    });
  }
}
