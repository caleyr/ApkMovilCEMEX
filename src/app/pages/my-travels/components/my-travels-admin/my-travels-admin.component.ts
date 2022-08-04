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
  sizePrevious: number;
  sizeScheduled: number;
  sizeRequest: number;
  
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
      this.previousTripsList = data.data.filter(travel =>
        travel.statusTravelAvailabilityString.includes('Finalizado') ||
        travel.statusTravelAvailabilityString.includes('Documentos cargados')
      )

      this.sizePrevious = this.previousTripsList.length;

      this.scheduledTripsList = data.data.filter(travel =>
        travel.statusTravelAvailabilityString.includes('Confirmado') ||
        travel.statusTravelAvailabilityString.includes('En proceso') ||
        travel.statusTravelAvailabilityString.includes('Con novedad')
      )

      this.sizeScheduled = this.scheduledTripsList.length;

      this.requestTripsList = data.data.filter(travel =>
        travel.statusTravelAvailabilityString.includes('Asignado')
      )

      this.sizeRequest = this.requestTripsList.length;
    })
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

}
