import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Companies } from '../../../interfaces/companies/companies';
import { LoginService } from '../../../services/auth/login.service';
import { CompaniesService } from '../../../services/companies/companies.service';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { DriversService } from '../../../services/drivers.service';
import { Location } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { DriverUpdate } from '../models/driver-update';

@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.page.html',
  styleUrls: ['./update-driver.page.scss'],
})
export class UpdateDriverPage implements OnInit {

  propagar = new EventEmitter<boolean>();

  driver : DriverUpdate = new DriverUpdate();

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
    private driversService : DriversService,
    private location : Location
  ) {    
    this.driver = driversService.driverUpdate;
    this.formBuilderInput(loginService.profileUser.CompanyId);
    this.companiesService.getCompany(loginService.profileUser.CompanyId).subscribe(async data =>{
      this.company = data.data;
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
    await this.driversService.createDriver(this.data).subscribe(async resp =>{
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
      FirstName: [this.driver.firstName, [ Validators.required ]],
      LastName: [this.driver.lastName, [ Validators.required ]],
      Password: ['Cemex_2022', [ Validators.required ]],    
      Email: [this.driver.email, [ Validators.required ]],    
      CompanyId: [id, [ Validators.required ]],
      Roles: ['Conductor'],
      Document: [this.driver.document, [ Validators.required ]],
      SapCode: [this.driver.sapCode, [ Validators.required ]],
      PhoneNumber: [this.driver.phoneNumber, [ Validators.required ]],
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
