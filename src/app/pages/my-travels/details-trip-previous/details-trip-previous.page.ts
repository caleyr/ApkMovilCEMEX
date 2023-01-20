import { LoginService } from 'src/app/services/auth/login.service';
import { Location } from '@angular/common';
import { TravelService } from './../../../services/travels/travel.service';
import { Travel } from './../../../interfaces/travels/travel';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/auth/api.service';

@Component({
  selector: 'app-details-trip-previous',
  templateUrl: './details-trip-previous.page.html',
  styleUrls: ['./details-trip-previous.page.scss'],
})
export class DetailsTripPreviousPage implements OnInit {

  id: string;
  rol: number;
  travel : Travel;

  loading = false;


  constructor(
    private location: Location,
    private travelService: TravelService,
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

}
