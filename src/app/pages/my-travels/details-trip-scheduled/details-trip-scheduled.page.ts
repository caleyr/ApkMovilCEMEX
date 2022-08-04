import { LoginService } from './../../../services/auth/login.service';
import { TravelService } from './../../../services/travels/travel.service';
import { Location } from '@angular/common';
import { Travel } from './../../../interfaces/travels/travel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-trip-scheduled',
  templateUrl: './details-trip-scheduled.page.html',
  styleUrls: ['./details-trip-scheduled.page.scss'],
})
export class DetailsTripScheduledPage implements OnInit {

  id: string;
  rol: string;
  travel = new Travel();

  constructor(private location : Location,
    private travelService: TravelService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.rol = this.loginService.profileUser.Roles;

    this.getData();
  }

  onBack(){
    this.location.back();
  }

  getData() {
    if (this.travelService.id !== null) {
      this.id = this.travelService.id;
      this.travelService.getTravelDetail(this.id).subscribe(data => {
        this.travel = data.data;
      });
    }
  }

}
