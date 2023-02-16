import { ActiveTabsService } from './../../../../services/active-tabs.service';
import { TravelService } from './../../../../services/travels/travel.service';
import { LoginService } from 'src/app/services/auth/login.service';
import { Travel } from './../../../../interfaces/travels/travel';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../../../services/auth/api.service';

@Component({
  selector: 'app-my-travels-drive',
  templateUrl: './my-travels-drive.component.html',
  styleUrls: ['./my-travels-drive.component.scss'],
})
export class MyTravelsDriveComponent implements OnInit {

  @Output()
  propagar = new EventEmitter<boolean>();

  private userId: number;
  selectedTab: string;
  sizePrevious: number;
  sizeScheduled: number;
  search: string;

  previousTripsList: Travel[] = [];
  scheduledTripsList: Travel[] = [];

  constructor(
    private apiService: ApiService,
    private travelService: TravelService,
    private activeTabsService: ActiveTabsService) { }

  ngOnInit() {
    this.propagar.emit(true);
    this.selectedTab = this.activeTabsService.myTravelsTab !== null ? this.activeTabsService.myTravelsTab : 'programados';
    this.userId = this.apiService.userProfile.UserId;
    this.getData();
  }

  ionViewWillEnter() {
    this.propagar.emit(true);
    this.selectedTab = this.activeTabsService.myTravelsTab !== null ? this.activeTabsService.myTravelsTab : 'programados';
    this.userId = this.apiService.userProfile.UserId;
    this.getData();
  }

  ionViewWillUnload() {
    this.activeTabsService.myTravelsTab = this.selectedTab;
  }

  async getData() {
    this.travelService.getFilterTravelByIdDriver(this.userId).subscribe({
      next: (data: any) => {
        this.previousTripsList = data.data.filter(travel =>
          travel.StatusTravelAvailability === 6
        )

        this.sizePrevious = this.previousTripsList.length;

        this.scheduledTripsList = data.data.filter(travel =>
          travel.StatusTravelAvailability === 2 ||
          travel.StatusTravelAvailability === 3 ||
          travel.StatusTravelAvailability === 4 ||
          travel.StatusTravelAvailability === 5
        )

        this.sizeScheduled = this.scheduledTripsList.length;
      },
      complete: () => {
        this.propagar.emit(false);
      }
    });
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  doRefresh(event) {
    this.propagar.emit(true);
    setTimeout(() => {
      this.previousTripsList = [];
      this.scheduledTripsList = [];
      this.getData();
      event.target.complete();
    }, 2000);
  }

}
