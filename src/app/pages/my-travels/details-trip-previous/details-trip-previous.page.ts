import { LoginService } from 'src/app/services/auth/login.service';
import { Location } from '@angular/common';
import { TravelService } from './../../../services/travels/travel.service';
import { Travel } from './../../../interfaces/travels/travel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-trip-previous',
  templateUrl: './details-trip-previous.page.html',
  styleUrls: ['./details-trip-previous.page.scss'],
})
export class DetailsTripPreviousPage implements OnInit {

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
        this.travel = data;
      });
    }
  }

}
