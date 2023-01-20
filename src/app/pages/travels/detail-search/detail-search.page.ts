import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../../../services/travels/travel.service';
import { TravelSearch } from '../../../interfaces/travels/travel-search';
import { LoginService } from '../../../services/auth/login.service';
import { DriversService } from '../../../services/drivers.service';
import { DriverList } from '../../drivers/models/drivers-list';
import { NavController } from '@ionic/angular';
import { Travel } from '../../../interfaces/travels/travel';
import { ApiService } from '../../../services/auth/api.service';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.page.html',
  styleUrls: ['./detail-search.page.scss'],
})
export class DetailSearchPage implements OnInit {

  codeTravel: string;

  alertShow = false;

  loading = false;

  rol = null;
  travel: Travel = new Travel();
  driverAssign: string = null;
  driverValidate: boolean = true;

  constructor(
    private location: Location,
    private travelService: TravelService,
    private navCtrl: NavController,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.rol = this.apiService.userProfile.RolesId;
    this.travel = this.travelService.travel;
  }

  onBack() {
    this.location.back();
  }

  closeAlertConfirm() {
    this.driverAssign = null;
    this.driverValidate = true;
  }

  closeModalOk() {
    this.alertShow = false;
    this.navCtrl.navigateBack('/app/travels', { animated: false });
  }

  cwcChangeDrivers(event) {
    this.driverAssign = event.detail.value;
    this.driverValidate = false;
  }

  async onClickCreateRequest() {
    this.loading = true;
    const data = new FormData();
    data.append('StatusTravelAvailability', '1');
    data.append('StatusTravel', '1');
    data.append('UserId', this.apiService.userProfile.UserId.toString());
    data.append('TraveId', this.travel.TraveId);
    await this.updateTravel(this.travel.TraveId, data);
    this.loading = false;
    this.alertShow = true;
  }

  updateTravel(id, dataForm) {
    return new Promise((resolve) => {
      this.travelService.updateTravel(dataForm).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (error) => {
          if (error.status === 401) {
            this.apiService.refreshToken();
          }
        }
      })
    });
  }
}
