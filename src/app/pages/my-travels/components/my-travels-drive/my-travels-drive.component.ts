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
      this.previousTripsList = data.filter(travel => {
        travel.statusTravel.includes('7');
      })

      this.scheduledTripsList = data.filter(travel => {
        travel.statusTravel.includes('2') ||
        travel.statusTravel.includes('3');
      })
    })
  }

  changeTab(tab: string){
    this.selectedTab = tab;
    console.log(this.selectedTab);
  }

}
