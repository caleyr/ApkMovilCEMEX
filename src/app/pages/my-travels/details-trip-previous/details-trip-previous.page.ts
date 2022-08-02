import { LoginService } from 'src/app/services/auth/login.service';
import { Roles } from './../../../interfaces/auth/auth-interface';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { TravelService } from './../../../services/travels/travel.service';
import { Subscription } from 'rxjs';
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
  suscripcion: Subscription;

  constructor(private location : Location,
    private travelService: TravelService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.rol = this.loginService.profileUser.Roles;
    console.log(this.rol);
    this.suscripcion = this.travelService.refresh$.subscribe(() => {
      this.getData();
    });
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
