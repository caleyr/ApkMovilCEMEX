import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user/user';
import { Companies } from '../../../../interfaces/companies/companies';
import { CompaniesService } from '../../../../services/companies/companies.service';
import { ErrorMessagesService } from '../../../../services/error-messages.service';
import { AdminLogistService } from '../../../../services/adminLogist/admin-logist.service';
import { NavController } from '@ionic/angular';
import { LoginService } from '../../../../services/auth/login.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-edit-admin-logis-third',
  templateUrl: './edit-admin-logis-third.component.html',
  styleUrls: ['./edit-admin-logis-third.component.scss'],
})
export class EditAdminLogisThirdComponent implements OnInit {
  
  propagar = new EventEmitter<boolean>();

  form: FormGroup;
  data : FormData;
  listCompanies : Companies[];
  profile :Profile = new Profile();
  previusMail : string; 

  loading: boolean = false;

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
    private adminLogistService : AdminLogistService,
    private navCtrl : NavController,
    private loginServices : LoginService
  ) {
    this.profile = loginServices.perfil;
    this.previusMail = loginServices.perfil.Email;
    this.formBuilderInput();
  }

  ngOnInit() {
    this.alertSucces = false;  
  }

  async updateData(){
    if(this.form.invalid){
      return;
    }
    this.data = new FormData();
    this.addFormData(this.form.value);
    this.propagar.emit(true);
    await this.adminLogistService.updateAdminLogistThird(this.data, this.previusMail).subscribe(async resp =>{
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

  openAlertConfirm(){
    if(this.form.invalid){
      return;
    }
    this.alertConfirm = true;
  }

  closeAlertConfirm(){
    this.alertConfirm = false;
  }

  buttonBack() {
    this.navCtrl.navigateRoot('/dashboard/perfil', {animated:true});
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
      FirstName: [ this.profile.FirstName, [Validators.required,]],
      LastName: [this.profile.LastName, [Validators.required,]],
      Email: [this.profile.Email, [Validators.required, Validators.email]],
      PhoneNumber: [ this.profile.PhoneNumber, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]],
      term: [true, [ Validators.requiredTrue ]]
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

  cwcChangeTerm(event){    
    this.form.get('term').setValue(event.detail);
  }

  clickUpdate(){ 
    if(this.form.invalid){
      return;
    }
    this.alertConfirm = true;
  }

  getStatusField( field: string ) {
    if ( this.form.controls[field].errors && this.form.controls[field].touched ) return 'error';
    return 'regular';
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

