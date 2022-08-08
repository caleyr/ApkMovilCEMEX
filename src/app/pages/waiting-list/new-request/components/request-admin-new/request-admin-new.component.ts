import { DriverList } from './../../../../drivers/models/drivers-list';
import { LoginService } from './../../../../../services/auth/login.service';
import { DriversService } from './../../../../../services/drivers.service';
import { Vehicle } from './../../../../vehicles/models/vehicle';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RequestService } from '../../../../../services/request.service';
import { UserService } from 'src/app/services/user.service';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { DatePipe } from '@angular/common';
declare var google;


@Component({
  selector: 'app-request-admin-new',
  templateUrl: './request-admin-new.component.html',
  styleUrls: ['./request-admin-new.component.scss'],
})
export class RequestAdminNewComponent implements OnInit {
  
  driverList: DriverList[];

  source : string;
  departament : string;
  dataO : string;
  timeO : string;

  autocompleteO = null;
  autocompleteD = null;
  driveSelected : string = 'Seleccionar';
  driverId : string;
  typeD = ['administrative_area_level_1', 'political'];
  typeM = ['locality', 'political'];

  form : FormGroup;
  data : FormData = new FormData();
  alertShow = false;

  buttonActivate : boolean = false;

  constructor(
    private vehiclesService: VehiclesService,
    private driversService: DriversService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private requestService : RequestService,
    private navCtrl : NavController,
    private userService : UserService,
    private datepipe: DatePipe) { }

  ngOnInit() {
    this.formBuilderInput();
    this.loadGooglePlace();
    this.getListDrivers();
  }

  getStatusField( field: string ) {
    if ( this.form.controls[field].errors && this.form.controls[field].touched ) return 'error';
    return 'regular';
  }

  getMsgField( field: string, nameField: string ) {
    let msgError = '';
    
    if ( this.form.controls[field].errors && this.form.controls[field].touched ) {
      msgError = `El campo ${ nameField } es requerido.`;
    }

    return msgError;
  }

  formBuilderInput(){
    this.form = this.formBuilder.group({
      Origen: ['', [ Validators.required ]],
      Destino: ['', [ Validators.required ]],
      TimerStar: ['', [ Validators.required ]],
      TimerEnd: ['', [ Validators.required ]],
      DateTravels: ['', [ Validators.required ]],
      DriverId: ['', [ Validators.required ]],
      VehicleId: [''],
      StatusRequest: ['1'],
      TravelsCode: ['1'],
      CodeRequest: ['1'],
      DepartamentSource: ['', [ Validators.required ]],
      DepartamentDestiny: ['', [ Validators.required ]]
    });
  }

  loadGooglePlace(){
    this.activeGooglePlaceOrigin();
    this.activeGooglePlaceDestiny();
  }

  activeGooglePlaceOrigin() {
    let input = document.getElementById('input-origin') as HTMLInputElement;
    this.autocompleteO = new google.maps.places.Autocomplete(input, { types: ['geocode', 'establishment'] });
    google.maps.event.addListener(this.autocompleteO, 'place_changed', () => {
      let place = this.autocompleteO.getPlace();
      this.form.get('Origen').setValue(place.formatted_address);
      for (let index = 0; index < place.address_components.length; index++) {
        if (place.address_components[index].types[0] === this.typeD[0]) {
          this.form.get('DepartamentSource').setValue(place.address_components[index].long_name);
        }
      }
    });
  }

  activeGooglePlaceDestiny() {
    let input = document.getElementById('input-destiny') as HTMLInputElement;
    this.autocompleteD = new google.maps.places.Autocomplete(input, { types: ['geocode', 'establishment'] });
    google.maps.event.addListener(this.autocompleteD, 'place_changed', () => {
      let place = this.autocompleteD.getPlace();
      this.form.get('Destino').setValue(place.formatted_address);
      for (let index = 0; index < place.address_components.length; index++) {
        if (place.address_components[index].types[0] === this.typeD[0]) {
          this.form.get('DepartamentDestiny').setValue(place.address_components[index].long_name);
        }
      }
    });
  }

  goMyRequest() {
    this.navCtrl.back();
  }

  getListDrivers(){
    this.driversService.getDriverList(this.loginService.profileUser.CompanyId).subscribe(data => {
      this.driverList = data.data;
    });
  }

  changTimeStar(event){
    this.form.get('TimerStar').setValue(`${event.detail.hours}:${event.detail.minutes}`);
  }

  changeTimeEnd(event){
    this.form.get('TimerEnd').setValue(`${event.detail.hours}:${event.detail.minutes}`);
  }

  changeDateTime(event){
    const fecha = this.datepipe.transform(event.detail, 'dd-MM-yyyy');
    this.form.get('DateTravels').setValue(fecha);  
  }

  changeDriver(event){
    if(event.detail.value === '0'){
      this.driveSelected = 'Seleccionar';
      this.form.get('DriverId').setValue('');
      this.form.get('VehicleId').setValue('');
    }else{
      this.form.get('DriverId').setValue(event.detail.value);
      this.userService.getUserDetail(event.detail.value).subscribe(data=>{
        this.vehiclesService.getVehicleById(data.data.lisenseVehicle).subscribe(dataV=>{          
          this.form.get('VehicleId').setValue(data.data.lisenseVehicle);
          this.driveSelected = dataV.data.licenseVehiculo;
        })
      });
    }
  }

  async searchTrips(){
    alert(JSON.stringify(this.form.value));
    if ( this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    }
    this.addFormData(this.form.value)
    this.requestService.createRequest(this.data).subscribe(()=>{      
      this.alertShow = true;
      },(error)=>{
        alert(JSON.stringify(error))
        this.goMyRequest();
    });
  }

  async addFormData(objeto){
    for ( var key in objeto ){   
      this.data.append(key, objeto[key]);  
    }
  }
}
