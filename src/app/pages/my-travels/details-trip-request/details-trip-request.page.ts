import { Location } from '@angular/common';
import { TravelService } from './../../../services/travels/travel.service';
import { Travel } from './../../../interfaces/travels/travel';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { VehiclesService } from '../../../services/vehicles.service';
import { DriverList } from '../../drivers/models/drivers-list';
import { DriversService } from '../../../services/drivers.service';
import { Subscription } from 'rxjs';
import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-details-trip-request',
  templateUrl: './details-trip-request.page.html',
  styleUrls: ['./details-trip-request.page.scss'],
})
export class DetailsTripRequestPage implements OnInit {

  id: string;
  travel = new Travel();

  listDrivers : DriverList[] = [];
  driveSelected : string = 'Seleccionar';
  driverId : string;
  licenseOk : boolean = true;

  messageShowA : boolean = false;
  messageShow : boolean = false;

  suscripcion: Subscription;

  constructor(private location : Location,
    private travelService: TravelService,
    private userService : UserService,
    private vehiclesService : VehiclesService,
    private driversService : DriversService,
    private loginService : LoginService
    ) { }

  ngOnInit() {
    this.suscripcion = this.travelService.refresh$.subscribe(() => {
      this.getData();
      this.getListDrivers();
    });
    this.getData();
    this.getListDrivers();
  }

  onBack(){
    this.location.back();
  }

  getListDrivers(){
    this.driversService.getDriverList(this.loginService.profileUser.CompanyId).subscribe(data => {
      this.listDrivers = data.data;
    });
  }

  getData() {
    if (this.travelService.id !== null) {
      this.id = this.travelService.id;
      this.travelService.getTravelDetail(this.id).subscribe(data => {
        this.travel = data.data;
      });
    }
  }

  showModal(){    
    document.getElementById('modal-assign-trip').setAttribute('open', 'true');
  }

  showModalConfirm(){
    const dataD = new FormData();
    dataD.append('StatusTravel', '4');
    dataD.append('StatusTravelAvailability', '4');
    dataD.append('id', this.travel.id);
    this.driversService.confirmDrive(this.travel.id, dataD).subscribe(()=>{      
      document.getElementById('modal-confirm-driver').setAttribute('open', 'true');
    },(err)=>{
      this.onBack();
      console.log(err);
    });
  }


  changeDriver(event){
    if(event.detail.value === '0'){
      this.driveSelected = 'Seleccionar';
      this.licenseOk = true;
    }else{
      this.driverId = event.detail.value;
      this.userService.getUserDetail(event.detail.value).subscribe(data=>{
        this.vehiclesService.getVehicleById(data.data.lisenseVehicle).subscribe(dataV=>{
          this.driveSelected = dataV.data.licenseVehiculo;
          this.licenseOk = false;
        })
      });
    }
  }

  driverAssign(){
    const dataD = new FormData();
    dataD.append('Id', this.travel.id);
    dataD.append('UserId', this.driverId);

    const data = new FormData();
    data.append('StatusTravel', '3');
    data.append('StatusTravelAvailability', '3');
    data.append('id', this.travel.id);
    this.travelService.updateTravel(this.travel.id, dataD).subscribe(()=>{        
      this.driversService.confirmDrive(this.travel.id, data).subscribe(()=>{
        document.getElementById('modal-assign-trip').setAttribute('open', 'false');
        this.messageShowA = true;
      },(err)=>{
        document.getElementById('modal-assign-trip').setAttribute('open', 'false');
        this.onBack();
        console.log(err);
      });
    },(err)=>{
      document.getElementById('modal-assign-trip').setAttribute('open', 'false');
      console.log(err);
    });
  }
}
