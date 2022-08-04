import { DriverList } from './../../../../drivers/models/drivers-list';
import { LoginService } from './../../../../../services/auth/login.service';
import { DriversService } from './../../../../../services/drivers.service';
import { VehiclesService } from './../../../../../services/vehicles.service';
import { Vehicle } from './../../../../vehicles/models/vehicle';
import { NavController } from '@ionic/angular';
import { TravelService } from './../../../../../services/travels/travel.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RequestService } from '../../../../../services/request.service';
declare var google;


@Component({
  selector: 'app-request-admin-new',
  templateUrl: './request-admin-new.component.html',
  styleUrls: ['./request-admin-new.component.scss'],
})
export class RequestAdminNewComponent implements OnInit {

  sourceList : string[] = [];
  departamentList : string[] = [];
  dateList : string[] = [];
  timeList : string[] = [];
  driverList: DriverList[];
  vehicleList: Vehicle[];

  source : string;
  departament : string;
  dataO : string;
  timeO : string;

  form : FormGroup;
  geocoder = null;
  data : FormData = new FormData();
  alertShow = false;

  buttonActivate : boolean = false;

  constructor(
    private vehiclesService: VehiclesService,
    private driversService: DriversService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private requestService : RequestService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.formBuilderInput();
    this.loadGoogle();
    this.getListVehicles();
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
      VehicleId: ['', [ Validators.required ]],
      StatusRequest: ['1'],
      TravelsCode: ['1'],
      CodeRequest: ['1'],
      DepartamentSource: [''],
      DepartamentDestiny: ['']
    });
  }

  loadGoogle(){
    this.geocoder = new google.maps.Geocoder();
  }

  goMyRequest() {
    this.navCtrl.back();
  }

  getListVehicles(){
    this.vehiclesService.getVehicleList(this.loginService.profileUser.CompanyId).subscribe(data => {
      this.vehicleList = data.data;
    });
  }

  getListDrivers(){
    this.driversService.getDriverList(this.loginService.profileUser.CompanyId).subscribe(data => {
      this.driverList = data.data;
    });
  }

  async codificacion(direccionText : string, tipo : string){
    return new Promise((resolve)=>{
      this.geocoder.geocode({
        address : direccionText
        }).then((result)=>{
          const { results } = result;
          if(tipo === 'Origen'){
            this.form.get('DepartamentSource').setValue(results[0].address_components[2].long_name);
            resolve(result);
          }else{
            this.form.get('DepartamentDestiny').setValue(results[0].address_components[2].long_name);
            resolve(result);
          }
      }).catch((e) => {
        console.log(e);      
      });
    });
  }

  changTimeStar(event){
    this.form.get('TimerStar').setValue(`${event.detail.hours}:${event.detail.minutes}`);
  }

  changeTimeEnd(event){
    this.form.get('TimerEnd').setValue(`${event.detail.hours}:${event.detail.minutes}`);
  }

  changeDateTime(event){
    this.form.get('DateTravels').setValue(`${event.detail.getDate()}-${event.detail.getMonth()}-${event.detail.getMonth()}`);
  }

  changeDriverId(event){
    this.form.get('DriverId').setValue(event.detail.value);
  }

  changeVehicleId(event){
    this.form.get('VehicleId').setValue(event.detail.value);
  }  

  async searchTrips(){
    if ( this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    }
    await this.codificacion( this.getOrigin(), 'Origen');
    await this.codificacion( this.getDestino(), 'Destino');   

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

  getOrigin(){
    return this.form.get('Origen').value;
  }

  getDestino(){
    return this.form.get('Destino').value;
  }

}
