import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { finalize } from 'rxjs/operators';
import { GoogleService } from '../../../../../../services/google.service';
import { TravelService } from '../../../../../../services/travels/travel.service';
import { Travel } from '../../../../../../interfaces/travels/travel';
import { NavController, ModalController } from '@ionic/angular';
import { FileRegisterTravelService } from '../../../../../../services/file-register/file-register-travel.service';
import { ApiService } from '../../../../../../services/auth/api.service';
import { UserService } from '../../../../../../services/user.service';
import { VehiclesService } from '../../../../../../services/vehicles.service';
declare var google;

@Component({
  selector: 'app-modal-detail-map-drive-cemex',
  templateUrl: './modal-detail-map-drive-cemex.component.html',
  styleUrls: ['./modal-detail-map-drive-cemex.component.scss'],
})
export class ModalDetailMapDriveCemexComponent implements OnInit {

  userId: number;

  travelDetail: Travel;
  estado = 1;
  showDetail = false;

  travelDistance = null;
  travelDistanceOrigin = null;
  distancia = 100;

  @ViewChild('getConsignmentDocument') inputFileC: ElementRef;
  @ViewChild('getManifestDocument') inputFileM: ElementRef;
  data: FormData = new FormData();

  nameFile: string = '';
  nameText: string;

  constructor(
    private googleService: GoogleService,
    private datepipe: DatePipe,
    private travelService: TravelService,
    private navCtrl: NavController,
    private modalController: ModalController,
    public fileTravel: FileRegisterTravelService,
    private apiService: ApiService,
    private userService : UserService,
    private vehiclesService : VehiclesService
  ) {
    Geolocation.checkPermissions();
    this.userId = apiService.userProfile.UserId;
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
    return new Promise((resolve) => {
      this.travelService.getTravelDetail(id).subscribe(data => {
        this.travelDetail = data.data;
        resolve(true);
      });
    });
  }

  async getId() {
    const data = await this.travelService.getFilterTravelByIdDriver(this.userId).toPromise();
    let list: Travel[] = data.data.filter(data => data.StatusTravelAvailability === 3 || data.StatusTravelAvailability === 4 || data.StatusTravelAvailability === 5);
    if (list.length === 1) {
      if (list[0].TraveId !== this.travelDetail.TraveId) {
        return false;
      } else if (list[0].TraveId === this.travelDetail.TraveId) {
        return true;
      }
    } else if (list.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  calcularDistance() {
    this.distancia = Math.ceil(google.maps.geometry.spherical.computeDistanceBetween(this.travelDistanceOrigin, this.travelDistance));
  }

  async onClickConfirmTrip() {
    this.googleService.changeLoadign(true);
    if (await this.getId()) {
      const data = new FormData();
      data.append('TraveId', this.travelDetail.TraveId);
      data.append('StatusTravel', '3');
      data.append('StatusTravelAvailability', '3');
      data.append('UserId', this.travelDetail.UserId.toString());
      await this.changeUserUpdate('1');
      await this.changeVehicleUpdate('1');
      await this.changeTravelUpdate(data);
    } else {
      this.googleService.changeLoadign(false);
      this.googleService.changeBack(true);
    }
  }

  async onClickStartTravel() {
    this.googleService.changeLoadign(true);
    const horaStar = new Date();
    const data = new FormData();
    data.append('TraveId', this.travelDetail.TraveId);
    data.append('UserId', this.travelDetail.UserId.toString());
    data.append('StatusTravel', '4');
    data.append('StatusTravelAvailability', '4');
    data.append('TripStarTime', this.datepipe.transform(horaStar, 'h:mm'));
    data.append('LoadStar', this.datepipe.transform(horaStar, 'h:mm'));
    data.append('LoadEnd', this.datepipe.transform(horaStar, 'h:mm'));
    this.travelDetail.LoadStar = this.datepipe.transform(horaStar, 'h:mm');
    this.travelDetail.LoadEnd = this.datepipe.transform(horaStar, 'h:mm');
    await this.changeTravelUpdate(data);
  }

  async onClickStartDischarge() {
    this.googleService.changeLoadign(true);
    const horaStar = new Date();
    const data = new FormData();
    data.append('TraveId', this.travelDetail.TraveId);
    data.append('UserId', this.travelDetail.UserId.toString());
    data.append('DowloadStar', this.datepipe.transform(horaStar, 'h:mm'));
    data.append('DowloadEnd', this.datepipe.transform(horaStar, 'h:mm'));
    data.append('StatusTravel', '5');
    data.append('StatusTravelAvailability', '5');
    data.append('DateTravelEnd', this.datepipe.transform(horaStar, 'yyyy-MM-dd'));
    data.append('TimerEndTravel', this.datepipe.transform(horaStar, 'h:mm'));
    this.travelDetail.DowloadStar = this.datepipe.transform(horaStar, 'h:mm');
    this.travelDetail.DowloadEnd = this.datepipe.transform(horaStar, 'h:mm');    
    this.travelDetail.DateTravelEnd = this.datepipe.transform(horaStar, 'yyyy-MM-dd');
    this.travelDetail.TimerEndTravel = this.datepipe.transform(horaStar, 'h:mm');
    await this.changeTravelUpdate(data);
  }

  async onClickEndTravel() {
    this.googleService.changeLoadign(true);
    const horaStar = new Date();
    const data = new FormData();
    data.append('TraveId', this.travelDetail.TraveId);
    data.append('UserId', this.travelDetail.UserId.toString());
    data.append('StatusTravel', '6');
    data.append('StatusTravelAvailability', '6'); 
    await this.changeUserUpdate('0');
    await this.changeVehicleUpdate('0');
    await this.changeTravelUpdate(data);
  }

  changeTravelUpdate(data: any) {
    return new Promise((resolve) => {
      this.travelService.updateTravel(data).subscribe({
        complete: () => {
          this.travelService.changeUpdate();
        },
        next: (data: any) => {
          this.getData(this.travelDetail.TraveId);
          resolve(true);
        },
        error: (err) => {
          resolve(true);
        }
      });
    })
  }

  changeUserUpdate(status) {
    const data = new FormData();
    data.append('UserId', this.travelDetail.UserId.toString());
    data.append('StatusTravel', status);
    return new Promise((resolve) => {
      this.userService.updateUserTravel(data).subscribe({
        next: (data: any) => {
          resolve(true);
        },
        error: (err) => {
          resolve(true);
        }
      });
    })
  }

  changeVehicleUpdate(status) {
    const data = new FormData();
    data.append('VehicleId', this.travelDetail.VehicleId.toString());
    data.append('StatusTravel', status);
    return new Promise((resolve) => {
      this.vehiclesService.updateVehicleTravel(data).subscribe({
        next: (data: any) => {
          resolve(true);
        },
        error: (err) => {
          resolve(true);
        }
      });
    })
  }

  updateDocument() {
    return new Promise((resolve) => {
      this.travelService.updateDocument(this.travelDetail.TraveId, this.fileTravel.fileData).subscribe({
        next: (data: any) => {
          resolve(true);
        },
        error: (err) => {
          resolve(true);
        }
      })
    })
  }

  async getCurrentPositionDrive() {
    const position = await Geolocation.getCurrentPosition();
    if (position) {
      await this.updateOriginTravel(position);
    }
  }

  updateOriginTravel(position) {
    return new Promise(async (resolve) => {
      const data = new FormData();
      data.append('TraveId', this.travelDetail.TraveId);
      data.append('UserId', this.travelDetail.UserId.toString());
      data.append('LatitudeSource', position.coords.latitude);
      data.append('LongitudeSource', position.coords.longitude);
      this.travelService.updateTravel(data).subscribe({
        complete: () => {
          resolve(true);
        },
        error: (err) => {
          resolve(true);
        }
      });
    })
  }

  async addMessage() {
    await this.modalController.dismiss();
    this.navCtrl.navigateRoot('/app/my-travels/driver-confirmed-trip-detail/new-update-message', { animated: false });
  }


  openModalDocument(name) {
    if (name === 'ConsignmentDocument') {
      this.nameFile = name;
      this.nameText = 'documento de remesa';
    } else if (name === 'ManifestDocument') {
      this.nameFile = name;
      this.nameText = 'documento manifiesto';
    }
    document.getElementById('modal-document').setAttribute('open', 'true');
  }

  cloceModalDocument() {
    document.getElementById('modal-document').setAttribute('open', 'false');
    this.fileTravel.resetPhoto();
  }

  async saveDocument() {
    await this.fileTravel.savePdf(this.nameFile);
    this.cloceModalDocument();
  }
}
