import { DriversService } from './../../../../../services/drivers.service';
import { LoginService } from 'src/app/services/auth/login.service';
import { Request } from './../../../models/request';
import { RequestService } from './../../../../../services/request.service';
import { NavController } from '@ionic/angular';
import { TravelService } from './../../../../../services/travels/travel.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { VehiclesService } from '../../../../../services/vehicles.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
declare var google;

@Component({
  selector: 'app-request-drive-new',
  templateUrl: './request-drive-new.component.html',
  styleUrls: ['./request-drive-new.component.scss'],
})
export class RequestDriveNewComponent implements OnInit {

  linceseFalse = '00000000-0000-0000-0000-000000000000';

  source : string;
  departament : string;
  dataO : string;
  timeO : string;

  form : FormGroup;
  data : FormData = new FormData();
  loading: boolean = false;

  id : string;

  buttonActivate : boolean = false;
  alertShow = false;
  alertShowError = false;

  autocompleteO = null;
  autocompleteD = null;
  typeD = ['administrative_area_level_1', 'political'];
  typeM = ['locality', 'political'];

  constructor(
    private formBuilder: FormBuilder,
    private requestService : RequestService,
    private navCtrl : NavController,
    private driverS : DriversService,
    private loginS : LoginService,
    private datepipe: DatePipe
    ) { }

  ngOnInit() {
    this.formBuilderInput();
    this.loadGoogle();
    this.getDataUser();
  }

  getDataUser(){
    this.id = this.loginS.profileUser.id;
    this.driverS.getDriverById(this.id).subscribe(data=>{
      this.form.get('DriverId').setValue(this.id);
      if(data.data.lisenseVehicle !== this.linceseFalse){
        this.form.get('VehicleId').setValue(data.data.lisenseVehicle);  
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

  formBuilderInput(){
    this.form = this.formBuilder.group({
      Origen: ['', [ Validators.required ]],
      Destino: ['', [ Validators.required ]],
      TimerStar: ['', [ Validators.required ]],
      TimerEnd: ['', [ Validators.required ]],
      DateTravels: ['', [ Validators.required ]],
      DriverId: ['', [ Validators.required ]],
      VehicleId: ['', [ Validators.required ]],
      StatusRequest: ['1'],
      TravelsCode: ['1'],
      CodeRequest: ['1'],
      DepartamentSource: [''],
      DepartamentDestiny: ['']
    });
  }

  loadGoogle(){
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

  changTimeStar(event){
    const start_time = moment(`${event.detail.hours}:${event.detail.minutes}`, 'HH:mm').format('hh:mm A');
    this.form.get('TimerStar').setValue(start_time);
    
  }

  changeTimeEnd(event){
    const end_time = moment(`${event.detail.hours}:${event.detail.minutes}`, 'HH:mm').format('hh:mm A');
    this.form.get('TimerEnd').setValue(end_time);
  }

  changeDateTime(event){
    const fecha = this.datepipe.transform(event.detail, 'dd-MM-yyyy');
    alert(fecha);    
    this.form.get('DateTravels').setValue(fecha);  
  }

  async searchTrips(){
    if ( this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    }
    
    this.addFormData(this.form.value)
    this.requestService.createRequest(this.data).subscribe(()=>{      
      this.alertShow = true;
      },(error)=>{
        this.goMyRequest();
    });
  }

  async addFormData(objeto){
    for ( var key in objeto ){   
      this.data.append(key, objeto[key]);  
    }
  }
}
