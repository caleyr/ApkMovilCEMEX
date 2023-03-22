import { DriverList } from './../../../../drivers/models/drivers-list';
import { LoginService } from './../../../../../services/auth/login.service';
import { DriversService } from './../../../../../services/drivers.service';
import { Vehicle } from './../../../../vehicles/models/vehicle';
import { NavController } from '@ionic/angular';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RequestService } from '../../../../../services/request.service';
import { UserService } from 'src/app/services/user.service';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { ApiService } from '../../../../../services/auth/api.service';
import { UserDetail } from '../../../../../models/user-detail.model';
import { filter } from 'rxjs/operators';
declare var google;


@Component({
  selector: 'app-request-admin-new',
  templateUrl: './request-admin-new.component.html',
  styleUrls: ['./request-admin-new.component.scss'],
})
export class RequestAdminNewComponent implements OnInit {

  @Output()
  propagar = new EventEmitter<boolean>();
  
  driverList: Vehicle[] = [];

  source : string;
  departament : string;
  dataO : string;
  timeO : string;

  autocompleteO = null;
  autocompleteD = null;
  driveSelected : string = 'Seleccionar';
  driverId : string;
  typeD = ['administrative_area_level_1', 'political'];
  typeS = ['administrative_area_level_2', 'political'];
  typeM = ['locality', 'political'];

  form : FormGroup;
  data : FormData = new FormData();
  alertShow = false;

  buttonActivate : boolean = false;

  constructor(
    private vehiclesService: VehiclesService,
    private formBuilder: FormBuilder,
    private requestService : RequestService,
    private navCtrl : NavController,
    private userService : UserService,
    private datepipe: DatePipe,
    private apiService : ApiService
    ) { }

  ngOnInit() {
    this.formBuilderInput();
    this.loadGooglePlace();
    this.getListDrivers();
  }

  formBuilderInput(){
    this.form = this.formBuilder.group({
      Origen: ['', [Validators.required]],
      DepartamentSource: [''],
      Destino: ['', [Validators.required]],
      DepartamentDestiny: [''],
      TimerStar: ['', [Validators.required]],
      TimerEnd: ['', [Validators.required]],
      DateTravels: ['', [Validators.required]],
      StatusRequest: ['0'],
      TravelsCode: ['0'],
      DriverId: ['', [Validators.required]],
      CodeRequest: [''],
      VehicleId: ['', [Validators.required]],
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

  goMyRequest() {
    this.navCtrl.back();
  }

  changeTimeStar(event){
    const end_time = moment(`${event.detail.hours}:${event.detail.minutes}`, 'HH:mm').format('hh:mm A');
    this.form.get('TimerStar').setValue(end_time);
  }

  changeTimeEnd(event){
    const end_time = moment(`${event.detail.hours}:${event.detail.minutes}`, 'HH:mm').format('hh:mm A');
    this.form.get('TimerEnd').setValue(end_time);
  }

  changeDateTime(event){
    const fecha = this.datepipe.transform(event.detail, 'dd-MM-yyyy');
    this.form.get('DateTravels').setValue(fecha);  
  }

  getListDrivers(){
    this.vehiclesService.getVehiclesUserByIdCompany( this.apiService.userProfile.CompanyId ).subscribe(data =>{
      this.driverList = data.data.filter(data => data.StatusTravel === 0 && data.Status === 2 && data.UserId !== this.apiService.userProfile.UserId);
    })
  }

  changeDriver(event){
    if(event.detail === ''){
      this.driveSelected = 'Seleccionar';
      this.form.get('DriverId').setValue('');
    }else{
      let driver = this.driverList.filter(data => data.VehicleId === event.detail)[0];
      this.form.get('DriverId').setValue(driver.UserId);
      this.driveSelected = driver.LicenseVehiculo;
    }
  }
  
  async searchTrips(){
    if ( this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    }
    this.propagar.emit(true);
    this.form.get('CodeRequest').setValue(new Date().getTime().toString());
    this.addFormData(this.form.value)
    this.requestService.createRequest(this.data).subscribe({
      next: (data: any) => {
        this.alertShow = true;
      }, complete: () => {
        this.propagar.emit(false);
      },
      error : () =>{
        this.goMyRequest();
      }
    });
  }

  async addFormData(objeto){
    for ( var key in objeto ){   
      this.data.append(key, objeto[key]);  
    }
  }
}
