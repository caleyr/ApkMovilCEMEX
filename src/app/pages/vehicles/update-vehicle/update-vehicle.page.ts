import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Companies } from '../../../interfaces/companies/companies';
import { CompaniesService } from '../../../services/companies/companies.service';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { VehiclesService } from '../../../services/vehicles.service';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.page.html',
  styleUrls: ['./update-vehicle.page.scss'],
})
export class UpdateVehiclePage implements OnInit {

  propagar = new EventEmitter<boolean>();

  form: FormGroup;
  data : FormData;
  vehicle : Vehicle = new Vehicle();
  companiesList : Observable<Companies[]>;

  alertSucces = true;
  alertConfirm = false;
  addIdentityCard = false;
  addDocumentCompany = false;
  toastMessage = '';

  errors: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private companiesService : CompaniesService,
    private errorMessages: ErrorMessagesService,
    private vehiclesService : VehiclesService
  ) {
  }

  ngOnInit() {    
    this.alertSucces = false;   
    this.vehicle = this.vehiclesService.vehicle;    
    this.companiesList = this.companiesService.getCompanies().pipe();
    this.formBuilderInput();
  }

  async updateVehicle(){
    if(this.form.invalid){
      return;
    }
    this.data = new FormData();
    this.addFormData(this.form.value);
    this.propagar.emit(true);
    await this.vehiclesService.updateVehicle(this.vehicle.id, this.data).subscribe(async resp =>{
       this.propagar.emit(false);
       this.alertSucces = true;
       this.errors = [];
    }, (error) =>{
       this.propagar.emit(false);
       this.errors = this.errorMessages.parsearErroresAPI(error);
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

  /*=============================================
   FORMULARIO REACTIVOS
  =============================================*/
  formBuilderInput(){
    this.form = this.formBuilder.group({
      Model: [this.vehicle.model, [ Validators.required ]],
      LicenseVehiculo: [this.vehicle.licenseVehiculo , [ Validators.required ]],
      TypeTrailer: [ this.vehicle.typeTrailer , [ Validators.required ]],    
      CompanyId: [ this.vehicle.companyId , [ Validators.required ]],    
      Soat: [ this.vehicle.soat , [ Validators.required ]],
      StatusVehicle: [ this.vehicle.statusVehicle ],
      StatusTravel: [  this.vehicle.statusTravel ],
      term: [true, [ Validators.requiredTrue ]]
    });

    this.form.valueChanges
    .pipe(
      debounceTime(350),
    )
    .subscribe(data => {
      console.log(data);      
      //this.validateInput();
    });
  }

}
