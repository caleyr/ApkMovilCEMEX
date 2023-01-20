import { ActiveTabsService } from './../../../../services/active-tabs.service';
import { Travel } from './../../../../interfaces/travels/travel';
import { TravelService } from './../../../../services/travels/travel.service';
import { LoginService } from 'src/app/services/auth/login.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../../../services/auth/api.service';

@Component({
  selector: 'app-my-travels-admin',
  templateUrl: './my-travels-admin.component.html',
  styleUrls: ['./my-travels-admin.component.scss'],
})
export class MyTravelsAdminComponent implements OnInit {

  @Output()
  propagar = new EventEmitter<boolean>();

  private companyId: number;
  selectedTab: string;
  sizePrevious: number;
  sizeScheduled: number;
  sizeRequest: number;
  search: string;

  previousTripsList: Travel[] = [];
  scheduledTripsList: Travel[] = [];
  requestTripsList: Travel[] = [];

  constructor(
    private travelService: TravelService,
    private activeTabsService: ActiveTabsService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.propagar.emit(true);
    this.selectedTab = this.activeTabsService.myTravelsTab !== null ? this.activeTabsService.myTravelsTab : 'programados';
    this.companyId = this.apiService.userProfile.CompanyId;
    this.getData();
  }

  ionViewWillEnter() {
    this.propagar.emit(true);
    this.selectedTab = this.activeTabsService.myTravelsTab !== null ? this.activeTabsService.myTravelsTab : 'programados';
    this.companyId = this.apiService.userProfile.CompanyId;
    this.getData();
  }

  ionViewWillUnload() {
    this.activeTabsService.myTravelsTab = this.selectedTab
  }

  getData() {
    this.travelService.getFilterTravelByAdmonTercero(this.companyId).subscribe({
      next: (data: any) => {
        this.previousTripsList = data.data.filter(travel =>
          travel.StatusTravelAvailability === 5 ||
          travel.StatusTravelAvailability === 6
        )

        this.sizePrevious = this.previousTripsList.length;

        this.scheduledTripsList = data.data.filter(travel =>
          travel.StatusTravelAvailability === 3 ||
          travel.observationsOfTravel !== undefined
        )

        this.sizeScheduled = this.scheduledTripsList.length;

        this.requestTripsList = data.data.filter(travel =>
          travel.StatusTravelAvailability === 2
        )

        this.sizeRequest = this.requestTripsList.length;
      },
      complete: () => {
        this.propagar.emit(false);
      }
    })
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
  }

  doRefresh(event) {
    this.propagar.emit(true);
    setTimeout(() => {
      this.previousTripsList = [];
      this.scheduledTripsList = [];
      this.requestTripsList = [];
      this.getData();
      event.target.complete();
    }, 2000);
  }

}
