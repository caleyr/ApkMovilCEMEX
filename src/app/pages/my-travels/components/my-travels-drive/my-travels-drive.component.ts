import { TravelService } from './../../../../services/travels/travel.service';
import { LoginService } from 'src/app/services/auth/login.service';
import { Travel } from './../../../../interfaces/travels/travel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-travels-drive',
  templateUrl: './my-travels-drive.component.html',
  styleUrls: ['./my-travels-drive.component.scss'],
})
export class MyTravelsDriveComponent implements OnInit {

  private userId: string;
  selectedTab: string = 'anteriores';
  sizePrevious: number;
  sizeScheduled: number;

  previousTripsList: Travel[] = [];
  scheduledTripsList: Travel[] = [];


  constructor(private loginService: LoginService,
    private travelService: TravelService) { }

  ionViewWillEnter() {
    this.userId = this.loginService.profileUser.id;
    this.getData();
  }

  ngOnInit() {
    this.userId = this.loginService.profileUser.id;
    this.getData();
  }

  getData() {
    this.travelService.getFilterTravelByIdDriver(this.userId).subscribe(data => {
      this.previousTripsList = data.data.filter(travel =>
        travel.statusTravelAvailabilityString.includes('Finalizado') ||
        travel.statusTravelAvailabilityString.includes('Documentos cargados')
      )

      this.sizePrevious = this.previousTripsList.length;

      this.scheduledTripsList = data.data.filter(travel =>
        travel.statusTravelAvailabilityString.includes('Asignado') ||
        travel.statusTravelAvailabilityString.includes('Confirmado') ||
        travel.statusTravelAvailabilityString.includes('En proceso') ||
        travel.statusTravelAvailabilityString.includes('Con novedad')
      )

      this.sizeScheduled = this.scheduledTripsList.length;
    })
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

}
