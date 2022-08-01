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
  previousTripsList: Travel[] = [];
  scheduledTripsList: Travel[] = [];


  constructor(private loginService: LoginService,
    private travelService: TravelService) { }

  ngOnInit() {
    this.userId = this.loginService.profileUser.id;
    this.getData();
  }

  getData(){
    this.travelService.getFilterTravelByIdDriver(this.userId).subscribe(data => {
      this.previousTripsList = data.filter(travel =>
        travel.statusTravelAvailabilityString.includes('Completado')
      )

      this.scheduledTripsList = data.filter(travel =>
        travel.statusTravelAvailabilityString.includes('Pre-Turno') ||
        travel.statusTravelAvailabilityString.includes('En turno')
      )
    })
  }

  changeTab(tab: string){
    this.selectedTab = tab;
    console.log(this.selectedTab);
  }

}
