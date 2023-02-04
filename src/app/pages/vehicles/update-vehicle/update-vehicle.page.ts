import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Companies } from '../../../interfaces/companies/companies';
import { CompaniesService } from '../../../services/companies/companies.service';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { VehiclesService } from '../../../services/vehicles.service';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { Location } from '@angular/common';
import { LoginService } from '../../../services/auth/login.service';
import { ApiService } from '../../../services/auth/api.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.page.html',
  styleUrls: ['./update-vehicle.page.scss'],
})
export class UpdateVehiclePage implements OnInit {

  loading = false;

  form: FormGroup;
  data : FormData = new FormData();
  vehicle : Vehicle = new Vehicle();
  company: string;

  alertSucces = false;
  alertConfirm = false;
  addIdentityCard = false;
  addDocumentCompany = false;
  toastMessage = '';

  errors: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private companiesService : CompaniesService,
    private errorMessages: ErrorMessagesService,
    private vehiclesService : VehiclesService,
    private location : Location,
    private apiService : ApiService
  ) {
    this.company = apiService.userProfile.CompanyName;
    this.vehicle = this.vehiclesService.vehicle;
    this.formBuilderInput();
  }

  ngOnInit() {     
  }

  formBuilderInput(){
    this.form = this.formBuilder.group({
      VehicleId : [this.vehicle.VehicleId],
      Model: [this.vehicle.Model, [ Validators.required ]],
      LicenseVehiculo: [this.vehicle.LicenseVehiculo , [ Validators.required ]],
      TypeTrailer: [ this.vehicle.TypeTrailer , [ Validators.required ]],    
      CompanyId: [ this.vehicle.CompanyName , [ Validators.required ]],    
      Soat: [ this.vehicle.Soat , [ Validators.required ]],
      StatusVehicle: [ this.vehicle.StatusVehicle ],
      StatusTravel: [  this.vehicle.StatusTravel ],
      UserId: [this.vehicle.UserId],
      Status: [this.vehicle.Status],
      term: [true, [ Validators.requiredTrue ]]
    });
  }

  async updateVehicle() {
    this.errors = [];
    this.alertConfirm = false;
    this.loading = true;
    if (this.form.invalid) {
      this.loading = true;
      return;
    }
    await this.addFormData(this.form.value);
    this.vehiclesService.updateVehicle(this.data).subscribe({
      next: (result: any) => {
        if (result.data.message !== 'Updated') {
          this.errors = this.errorMessages.parsearErroresAPI('Error, La placa del vehiculo anotada ya se encuentra registrada.');
          this.form.get('LicenseVehiculo').setValue('');
          this.data = new FormData();
        } else {
          this.alertSucces = true;
          this.alertConfirm = false;
          this.errors = [];
          setTimeout(() => {
            this.onBack();
          }, 3000);
        }
      },
      error: (err) => {
        this.loading = false;
        this.errors = this.errorMessages.parsearErroresAPI(err.data);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  async addFormData(objeto){
    for ( var key in objeto ) {
      if(key !== 'term'){    
        this.data.append(key, objeto[key]);
      }      
    }
  }

  openAlertConfirm(){
    if(this.form.invalid){
      return;
    }
    this.alertConfirm = true;
  }

  closeAlertConfirm(){
    this.alertConfirm = false;
  }

  onBack(){
    this.location.back();
  }
}
