import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Travel } from 'src/app/interfaces/travels/travel';
import { TravelListUnique } from 'src/app/interfaces/travels/travel-list-unique';
import { TravelService } from 'src/app/services/travels/travel.service';
import { ApiService } from '../../services/auth/api.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.page.html',
  styleUrls: ['./travels.page.scss'],
})
export class TravelsPage implements OnInit {


  loading = false;

  list: Travel[] = [];
  departamentList: Travel[] = [];
  sourceList: Travel[] = [];
  dateList: Travel[] = [];

  timeList: Travel[] = [];
  timeListTwo: Travel[] = [];


  source: string;
  departament: string;
  dataO: string;
  timeS: string = '';
  timeE: string = '';

  buttonActivate: boolean = false;

  constructor(
    private travelService: TravelService,
    private navCtrl: NavController,
    private apiService: ApiService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.getListDepartament();
  }

  async getListDepartament() {
    const data = await this.travelService.getTravels().subscribe({
      next: (data: any) => {
        let hash = {};
        this.list = data.data.filter(data => data.StatusTravelAvailability === 0);
        this.departamentList = this.list.filter(function (current) {
          var exists = !hash[current.DepartamentSource];
          hash[current.DepartamentSource] = true;
          return exists;
        });
      },
      error: async (error) => {
        if (error.status === 401) {
          const ok = await this.apiService.refreshToken();
          if (!ok) {
            this.getListDepartament();
          }
        } else {
          this.departamentList = [];
        }
      },
      complete: () => {
        this.loading = false;
      }
  });
}

  async changeDepartament(event) {
  if (event.detail.value == 0) {
    this.sourceList = [];
    this.timeList = [];
    this.dateList = [];

    this.departament = '';
    this.source = '';
    this.dataO = '';
    this.timeS = '';
    this.timeE = '';
  } else {
    this.departament = event.detail.value;
    let hash = {};
    let listD = this.list.filter(data => data.DepartamentSource === this.departament);
    this.list = listD;
    this.sourceList = listD.filter(function (current) {
      var exists = !hash[current.Source];
      hash[current.Source] = true;
      return exists;
    });
  }
}

changeSource(event) {
  if (event.detail.value == 0) {
    this.timeList = [];
    this.dateList = [];
    this.source = '';
    this.dataO = '';
    this.timeS = '';
    this.timeE = '';
  } else {
    this.source = event.detail.value;
    let hash = {};
    this.dateList = this.list.filter(function (current) {
      var exists = !hash[current.DateTravel];
      hash[current.DateTravel] = true;
      return exists;
    });
  }
}

changeDate(event) {
  if (event.detail.value == 0) {
    this.timeList = [];
    this.timeListTwo = [];
    this.dataO = '';
    this.timeS = '';
    this.timeE = '';
  } else {
    this.dataO = event.detail.value;
    let hash = {};
    let listOne = this.list.filter(function (current) {
      var exists = !hash[current.TimerStar];
      hash[current.TimerStar] = true;
      return exists;
    });
    listOne = listOne.sort((a, b) => Date.parse('1/01/2023 ' + a.TimerStar) - Date.parse('1/01/2023 ' + b.TimerStar));
    this.timeList = listOne.slice(0, listOne.length / 2);
    this.timeListTwo = listOne.slice(listOne.length / 2, listOne.length);
  }
}

changeHourStar(event) {
  if (event.detail.value == 0) {
    this.timeS = '';
  } else {
    this.timeS = event.detail.value;
  }
}

changeHourEnd(event) {
  if (event.detail.value == 0) {
    this.timeE = '';
  } else {
    this.timeE = event.detail.value;
  }
}


  async searchTrips() {
  const list = await this.getTravelListSearch();
  if (list.length !== 0) {
    this.navCtrl.navigateRoot('/app/travels/search-list', { animated: false });
  }
}

getTravelListSearch() {
  return new Promise<Travel[]>((resolved, reject) => {
    this.travelService.traveSearchList = this.list.filter(data =>
      data.DepartamentSource === this.departament &&
      data.Source === this.source &&
      data.DateTravel === this.dataO &&
      Date.parse('1/01/2023 ' + data.TimerStar) >= Date.parse('1/01/2023 ' + this.timeS) &&
      Date.parse('1/01/2023 ' + data.TimerStar) <= Date.parse('1/01/2023 ' + this.timeE)
    );
    resolved(this.travelService.traveSearchList);
  });
}

doRefresh(event) {
  setTimeout(() => {
    this.departamentList = [];
    this.sourceList = [];
    this.timeList = [];
    this.dateList = [];
    this.buttonActivate = false;
    this.getListDepartament();
    event.target.complete();
  }, 2000);
}
}
