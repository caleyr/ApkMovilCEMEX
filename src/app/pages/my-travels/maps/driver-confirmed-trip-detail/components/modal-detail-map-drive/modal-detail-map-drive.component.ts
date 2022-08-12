import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Travel } from '../../../../../../interfaces/travels/travel';
import { GoogleService } from '../../../../../../services/google.service';
import { DatePipe } from '@angular/common';
import { TravelService } from '../../../../../../services/travels/travel.service';

@Component({
  selector: 'app-modal-detail-map-drive',
  templateUrl: './modal-detail-map-drive.component.html',
  styleUrls: ['./modal-detail-map-drive.component.scss'],
})
export class ModalDetailMapDriveComponent implements OnInit {

  travelDetail: Travel;
  estado = 1;
  showDetail = false;

  constructor(
    private googleService : GoogleService,
    private datepipe: DatePipe,
    private travelService : TravelService
  ) {
  }

  ngOnInit() {}

  getData(id) {
    return new Promise((resolve)=>{
      this.travelService.getTravelDetail(id).subscribe(data => {
        this.travelDetail = data.data;
        resolve(true);
      });
    });
  }


  onClickConfirmTrip(){
    const data = new FormData();
    data.append('StatusTravel', '4');
    data.append('StatusTravelAvailability', '4');
    data.append('Id', this.travelDetail.id);

    this.travelService.confirmDrive(this.travelDetail.id, data).subscribe(()=>{
      this.getData(this.travelDetail.id);
    });
  }

  onClickStartTravel(){
    const horaStar = new Date();
    const data = new FormData();
    data.append('Id', this.travelDetail.id);
    data.append('StatusTravel', '5');
    data.append('TripStarTime', this.datepipe.transform(horaStar, 'h:mm'));
    this.travelService.startTravel(this.travelDetail.id, data).subscribe(()=>{
      this.getData(this.travelDetail.id);
    });
  }
}
