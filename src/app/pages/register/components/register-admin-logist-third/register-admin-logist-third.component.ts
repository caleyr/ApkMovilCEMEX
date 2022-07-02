import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ConveyorService } from 'src/app/services/conveyor/conveyor.service';
import { ErrorMessagesService } from 'src/app/services/error-messages.service';
import { CompaniesService } from '../../../../services/companies/companies.service';
import { Companies } from '../../../../interfaces/companies/companies';
import { AdminLogistService } from '../../../../services/adminLogist/admin-logist.service';

@Component({
  selector: 'app-register-admin-logist-third',
  templateUrl: './register-admin-logist-third.component.html',
  styleUrls: ['./register-admin-logist-third.component.scss'],
})
export class RegisterAdminLogistThirdComponent implements OnInit {

  @Input() typeConveyor: number;
  @Output()
  propagar = new EventEmitter<boolean>();

  form: FormGroup;
  data : FormData;
  listCompanies : Companies[];

  alertSucces = true;
  alertConfirm = false;
  addIdentityCard = false;
  addDocumentCompany = false;
  toastMessage = '';

  errors: string[] = [];

  statusInputName = 'regular';
  statusInputMessageName = '';

  statusInputLastName = 'regular';
  statusInputMessageLastName = '';

  statusInputEmail = 'regular';
  statusInputMessageEmail = '';

  statusInputDocument = 'regular';
  statusInputMessageDocument = '';

  statusInputSap = 'regular';
  statusInputMessageSap = '';

  statusInputPhone = 'regular';
  statusInputMessagePhone = '';

  statusInputCompany = 'regular';
  statusInputMessageCompany = '';

  statusInputNit = 'regular';
  statusInputMessageNit = '';

  openPhotoIdentityCard = false;
  openPhotoDocumentCompany = false;

  constructor(
    private formBuilder: FormBuilder,
    private companiesService : CompaniesService,
    private errorMessages: ErrorMessagesService,
    private adminLogistService : AdminLogistService
  ) {    
    this.formBuilderInput();
    this.companiesService.getCompanies().subscribe(async data =>{
      this.listCompanies = data;
    });
  }

  ngOnInit() {
    this.alertSucces = false;  
  }

  cwcChange(event){
    this.form.get('CompanyId').setValue(`${event.detail.value}`);
  }

  async register(){
    if(this.form.invalid){
      return;
    }
    this.data = new FormData();
    this.addFormData(this.form.value);
    this.propagar.emit(true);
    await this.adminLogistService.createAdminLogistThird(this.data).subscribe(async resp =>{
       this.propagar.emit(false);
       this.alertSucces = true;
       this.addIdentityCard = false;
       this.addDocumentCompany = false;
       this.alertConfirm = false;
       this.alertSucces = true;
       this.errors = [];
    }, (error) =>{
      console.log(error);      
       this.propagar.emit(false);
       this.errors = this.errorMessages.parsearErroresAPI(error);
    });
  }

  async addFormData(objeto){
    for ( var key in objeto ) {
      this.data.append(key, objeto[key]);
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

  openModalPhotoIdentityCard(){
    if(this.openPhotoIdentityCard = true){
      this.openPhotoIdentityCard = false;
    }else{
      this.openPhotoIdentityCard = true;
    }
  }

  openModalPhotoDocumentCompany(){
    this.openPhotoDocumentCompany = true;
  }

  /*=============================================
   FORMULARIO REACTIVOS
  =============================================*/
  formBuilderInput(){
    this.form = this.formBuilder.group({
      FirstName: ['', [Validators.required,]],
      LastName: ['', [Validators.required,]],
      Password: ['', [Validators.required,]],
      Email: ['', [Validators.required, Validators.email]],
      CompanyId: ['', [Validators.required,]],
      Roles: ['Administrador Logistico Tercero', [Validators.required,]],
      PhoneNumber: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]]
    });
    this.form.valueChanges
    .pipe(
      debounceTime(350),
    )
    .subscribe(data => {
      console.log(data);      
      this.validateInput();
    });
  }

   /*=============================================
   FUNCIÓN PARA VALIDAR LOS CAMPOS
  =============================================*/
  validateInput(){
    if(this.form.get('FirstName').errors && this.form.get('FirstName').dirty){
      this.statusInputName = 'error';
      this.statusInputMessageName = 'Este campo es requerido';
     }else{
      this.statusInputName = 'regular';
      this.statusInputMessageName = '';
     }

     if(this.form.get('LastName').errors && this.form.get('LastName').dirty){
      this.statusInputLastName = 'error';
      this.statusInputMessageLastName = 'Este campo es requerido';
     }else{
      this.statusInputLastName = 'regular';
      this.statusInputMessageLastName = '';
     }

     if(this.form.get('Email').errors && this.form.get('Email').dirty){
        if(this.form.get('Email').errors.email){
          this.statusInputEmail = 'error';
          this.statusInputMessageEmail = 'Ingrese un correo electrónico válido';
        }else{
          this.statusInputEmail = 'error';
        this.statusInputMessageEmail = 'Este campo es requerido';
        }
     }else{
      this.statusInputEmail = 'regular';
      this.statusInputMessageEmail = '';
     }

     if(this.form.get('PhoneNumber').errors && this.form.get('PhoneNumber').dirty){

      if(this.form.get('PhoneNumber').errors.minlength || this.form.get('PhoneNumber').errors.maxlength){
        this.statusInputPhone = 'error';
        this.statusInputMessagePhone = 'Ingrese un número de celular válido';
      }else{
        this.statusInputPhone = 'error';
        this.statusInputMessagePhone = 'Este campo es requerido';
      }

     }else{
      this.statusInputPhone = 'regular';
      this.statusInputMessagePhone = '';
     }
  }

}
