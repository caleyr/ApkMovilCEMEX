import { LoginService } from './../../../services/auth/login.service';
import { TravelService } from './../../../services/travels/travel.service';
import { Location } from '@angular/common';
import { Travel } from './../../../interfaces/travels/travel';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../../services/auth/api.service';

@Component({
  selector: 'app-details-trip-scheduled',
  templateUrl: './details-trip-scheduled.page.html',
  styleUrls: ['./details-trip-scheduled.page.scss'],
})
export class DetailsTripScheduledPage implements OnInit {

  id: string;
  rol: number;
  travel : Travel;

  showDetail = false;
  loading = false;

  constructor(
    private location: Location,
    private travelService: TravelService,
    private navCtrl: NavController,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.rol = this.apiService.userProfile.RolesId;
    this.getData();
  }

  onBack() {
    this.location.back();
  }

  getData() {
    if (this.travelService.id !== null) {
      this.id = this.travelService.id;
      this.travelService.getTravelDetail(this.id).subscribe(data => {
        this.loading = false;
        this.travel = data.data;
      });
    }
  }

  onClickTrackTrip() {
    this.navCtrl.navigateRoot('/app/my-travels/admin-track-trip-detail', { animated: false });
  }

  async addMessage() {
    this.navCtrl.navigateRoot('/app/my-travels/admin-track-trip-detail/new-drive-message', { animated: false });
  }

}
