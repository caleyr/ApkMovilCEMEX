import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { finalize } from 'rxjs/operators';
import { GoogleService } from '../../../../../../services/google.service';
import { TravelService } from '../../../../../../services/travels/travel.service';
import { Travel } from '../../../../../../interfaces/travels/travel';
declare var google;

@Component({
  selector: 'app-modal-detail-map-drive-cemex',
  templateUrl: './modal-detail-map-drive-cemex.component.html',
  styleUrls: ['./modal-detail-map-drive-cemex.component.scss'],
})
export class ModalDetailMapDriveCemexComponent implements OnInit {

  travelDetail: Travel;
  estado = 1;
  showDetail = false;

  travelDistance = null;
  travelDistanceOrigin = null;
  distancia = 100;

  constructor(
    private googleService : GoogleService,
    private datepipe: DatePipe,
    private travelService : TravelService
  ) {
    Geolocation.checkPermissions();
  }

  ngOnInit() {
    this.googleService.travelDistance.subscribe(data => {
      this.travelDistance = data;
      this.calcularDistance()
    });
    this.googleService.travelDistanceO.subscribe(data => {
      this.travelDistanceOrigin = data;
    });
  }

  getData(id) {
    return new Promise((resolve)=>{
      this.travelService.getTravelDetail(id).subscribe(data => {
        this.travelDetail = data.data;
        resolve(true);
      });
    });
  }

  calcularDistance(){
    this.distancia = Math.ceil(google.maps.geometry.spherical.computeDistanceBetween(this.travelDistanceOrigin, this.travelDistance));
  }

  onClickConfirmTrip(){
    this.googleService.changeLoadign(true);
    const data = new FormData();
    data.append('StatusTravel', '4');
    data.append('StatusTravelAvailability', '4');
    data.append('Id', this.travelDetail.id);

    this.travelService.confirmDrive(this.travelDetail.id, data).pipe(
      finalize(()=>{
        this.googleService.changeLoadign(false);
      })
    ).subscribe(()=>{
      this.getData(this.travelDetail.id);
    });
  }

  async onClickStartTravel(){
    this.googleService.changeLoadign(true);
    const horaStar = new Date();
    const data = new FormData();
    data.append('Id', this.travelDetail.id);
    data.append('StatusTravel', '5');
    data.append('TripStarTime', this.datepipe.transform(horaStar, 'h:mm a'));
    this.travelDetail.loadStar = this.datepipe.transform(horaStar, 'h:mm a');
    this.travelDetail.loadEnd = this.datepipe.transform(horaStar, 'h:mm a');    
    this.travelService.startTravel(this.travelDetail.id, data).subscribe(async ()=>{    
      await this.getCurrentPositionDrive();
      await this.changeTravelTime();
    });
  }

  async onClickStartDischarge(){
    this.googleService.changeLoadign(true);
    const horaStar = new Date();
    this.travelDetail.dowloadStar = this.datepipe.transform(horaStar, 'h:mm a');
    await this.changeTravelTime();
  }

  async onClickEndDischarge(){
    this.googleService.changeLoadign(true);
    const horaStar = new Date();
    this.travelDetail.dowloadEnd = this.datepipe.transform(horaStar, 'h:mm a');
    await this.getCurrentPositionDrive();
  }

  changeTravelTime(){
    return new Promise((resolve)=>{
      const data = new FormData();
      data.append('LoadStar', this.travelDetail.loadStar);
      data.append('LoadEnd', this.travelDetail.loadEnd);
      data.append('DowloadStar', this.travelDetail.dowloadStar);
      data.append('DowloadEnd', this.travelDetail.dowloadEnd);
      this.travelService.updateTimeTravel(this.travelDetail.id, data).pipe(
        finalize(()=>{          
          this.googleService.changeLoadign(false);
          this.travelService.changeUpdate();
        })
      ).subscribe(()=>{      
        this.getData(this.travelDetail.id);
        resolve(true)
      });
    })
  }

  async getCurrentPositionDrive(){
    const position = await Geolocation.getCurrentPosition();
    if(position){
      await this.updateOriginTravel(position);      
      await this.changeTravelTime();
    }    
  }

  updateOriginTravel(position){
    return new Promise(async (resolve)=>{
      const data = new FormData();
      data.append('LatitudeSource', position.coords.latitude);
      data.append('LongitudeSource', position.coords.longitude);
      this.travelService.updatePointOrigin(this.travelDetail.id, data).subscribe(async result=>{
        resolve(true);
      });
    })
  }
}
