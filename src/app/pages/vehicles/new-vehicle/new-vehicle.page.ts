import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Companies } from '../../../interfaces/companies/companies';
import { CompaniesService } from '../../../services/companies/companies.service';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { debounceTime } from 'rxjs/operators';
import { VehiclesService } from '../../../services/vehicles.service';
import { Location } from '@angular/common';
import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.page.html',
  styleUrls: ['./new-vehicle.page.scss'],
})
export class NewVehiclePage implements OnInit {
  
  propagar = new EventEmitter<boolean>();

  form: FormGroup;
  data : FormData;
  company : Companies = new Companies();

  alertSucces = true;
  alertConfirm = false;
  addIdentityCard = false;
  addDocumentCompany = false;
  toastMessage = '';

  errors: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private loginService : LoginService,
    private companiesService : CompaniesService,
    private errorMessages: ErrorMessagesService,
    private vehiclesService : VehiclesService,
    private location : Location
  ) {    
    this.formBuilderInput(loginService.profileUser.CompanyId);
    this.companiesService.getCompany(loginService.profileUser.CompanyId).subscribe(async data =>{
      this.company = data;
    });
  }

  ngOnInit() {
    this.alertSucces = false;  
  }

  async createVehicle(){
    if(this.form.invalid){
      return;
    }
    this.data = new FormData();
    this.addFormData(this.form.value);
    this.propagar.emit(true);
    await this.vehiclesService.createVehicle(this.data).subscribe(async resp =>{
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

  removeDocumentCompany(){
    this.form.get('documentCompany').setValue('');
    //this.conveyorService.removeModalPhotoDocumentCompany.emit();
    this.addDocumentCompany = false;
    this.toastMessage = 'Se eliminó el documento de la empresa';
    const element = document.getElementById('toast-message-driver');
      element.classList.remove('hide');
  }

  removeIdentityCard(){
    this.form.get('documentIdentityCardFrontal').setValue('');
    this.form.get('documentIdentityCardBack').setValue('');
    //this.conveyorService.removeModalIdentityCardDriver.emit();
    this.addIdentityCard = false;
    this.toastMessage = 'Se eliminó la cédula de ciudadanía';
    const element = document.getElementById('toast-message-driver');
      element.classList.remove('hide');
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

  /*=============================================
   FORMULARIO REACTIVOS
  =============================================*/
  formBuilderInput(id : string){
    this.form = this.formBuilder.group({
      Model: ['', [ Validators.required ]],
      LicenseVehiculo: ['', [ Validators.required ]],
      TypeTrailer: ['', [ Validators.required ]],    
      CompanyId: [id, [ Validators.required ]],    
      Soat: ['', [ Validators.required ]],
      SoatDocument: [''],
      TechnomechanicsDocument: [''],
      PolicyDocument: [''],
      CardPropertyDocument: [''],
      StatusVehicle: ['1'],
      StatusTravel: [ '1'],
      UserId: [ '1' ],
      term: [false, [ Validators.requiredTrue ]]
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
