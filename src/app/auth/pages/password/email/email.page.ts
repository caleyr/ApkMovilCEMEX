import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ForgotPasswordService } from '../../../../services/auth/forgot-password.service';
import { ErrorMessagesService } from '../../../../services/error-messages.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  form: FormGroup;

  statusInputEmail = 'regular';
  statusInputMessageEmail = '';

  email: string = null;
  errors: string[] = [];
  loading = false;
  alertSucces = false;
  constructor(
    private formBuilder: FormBuilder,
    private errorMessages: ErrorMessagesService,
    private forgotPasswordService: ForgotPasswordService,
    private navCtrl : NavController
  ) {
   }

  ngOnInit() {    
    this.formBuilderInput();
  }
  async sendEmail(){
    this.loading = true;
    await this.forgotPasswordService.forgotPassword(this.form.value).subscribe(async resp =>{
      this.forgotPasswordService.email = this.form.get('Email').value;
      this.loading = false;
      this.alertSucces = true;
      console.log(resp);
    }, (error)=>{
      this.loading = false;
      console.log(error);
      
    }
    );

  }

  onBack(){
    this.navCtrl.navigateRoot('/login', {animated:true});
  }

  /*=============================================
   FORMULARIOS REACTIVOS
  =============================================*/
  formBuilderInput(){
    this.form = this.formBuilder.group({
      Email: ['', [
        Validators.required,
      ]],
    });

    this.form.valueChanges
    .pipe(
      debounceTime(350),
    )
    .subscribe(data => {
       this.validateInput();
    });
  }
  validateInput(){
    if(this.form.get('Email').errors && this.form.get('Email').dirty){
      this.statusInputEmail = 'error';
      this.statusInputMessageEmail = 'Este campo es requerido';
     }else{
      this.statusInputEmail = 'regular';
      this.statusInputMessageEmail = '';
     }
  }
}
