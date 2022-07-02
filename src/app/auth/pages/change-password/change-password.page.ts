import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ForgotPasswordService } from '../../../services/auth/forgot-password.service';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  form: FormGroup;

  statusInputPassword = 'regular';
  statusInputMessagePassword = '';

  config = {
    length : 6,
    inputStyles : {
      'width': '42px',
      'height': '40px',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': '#888787'
    }
  }

  email: string = null;
  errors: string[] = [];
  loading = false;
  alertSucces = false;
  constructor(
    private formBuilder: FormBuilder,
    private errorMessages: ErrorMessagesService,
    private forgotPasswordService: ForgotPasswordService,
    private router : Router
  ) {
    this.email = forgotPasswordService.email;
   }

  ngOnInit() {
    this.formBuilderInput();
  }
  async sendEmail(){
    this.loading = true;
    await this.forgotPasswordService.changePassword(this.form.value).subscribe(async resp =>{
      this.forgotPasswordService.email = '';
      this.loading = false;
      this.alertSucces = true;
    }, (error)=>{
      this.loading = false;
      this.errors = this.errorMessages.parsearErroresAPI(error);
    }
    );

  }

  /*=============================================
   FORMULARIOS REACTIVOS
  =============================================*/
  formBuilderInput(){
    this.form = this.formBuilder.group({
      Email: [this.email, [
        Validators.required,
      ]],
      Otp: ['', [
        Validators.required,
      ]],
      NewPassword: ['', [
        Validators.required,
      ]],
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

  onOtpChange(event){
    this.form.controls['Otp'].setValue(event); 
  }

  onBack(){
    this.router.navigateByUrl('/reset-password-email');
  }

  validateInput(){
    if(this.form.get('NewPassword').errors && this.form.get('NewPassword').dirty){
      this.statusInputPassword = 'error';
      this.statusInputMessagePassword = 'Este campo es requerido';
     }else{
      this.statusInputPassword = 'regular';
      this.statusInputMessagePassword = '';
     }
  }
}
