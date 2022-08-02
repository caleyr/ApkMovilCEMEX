import { Travel } from './../../../../interfaces/travels/travel';
import { TravelService } from './../../../../services/travels/travel.service';
import { LoginService } from 'src/app/services/auth/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-travels-admin',
  templateUrl: './my-travels-admin.component.html',
  styleUrls: ['./my-travels-admin.component.scss'],
})
export class MyTravelsAdminComponent implements OnInit {

  private companyId: string;
  selectedTab: string = 'anteriores';
  previousTripsList: Travel[] = [];
  scheduledTripsList: Travel[] = [];
  requestTripsList: Travel[] = [];


  constructor(private loginService: LoginService,
    private travelService: TravelService) { }

  ionViewWillEnter() {
    this.companyId = this.loginService.profileUser.CompanyId;
    this.getData();
  }

  ngOnInit() {
    this.companyId = this.loginService.profileUser.CompanyId;
    this.getData();
  }

  getData() {
    this.travelService.getFilterTravelByAdmonTercero(this.companyId).subscribe(data => {
      console.log(data);

      this.previousTripsList = data.filter(travel =>
        travel.statusTravelAvailabilityString.includes('Completado')
      )

      this.scheduledTripsList = data.filter(travel =>
        travel.statusTravelAvailabilityString.includes('Pre-Turno') ||
        travel.statusTravelAvailabilityString.includes('En turno')
      )

      this.requestTripsList = data.filter(travel =>
        travel.statusTravelAvailabilityString.includes('Por asignar')
      )
    })
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
    console.log(this.selectedTab);
  }

}
