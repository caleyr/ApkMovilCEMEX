/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators, NgForm } from '@angular/forms';
import { LoginService } from '../../../services/auth/login.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { debounceTime } from 'rxjs/operators';
import { ErrorMessagesService } from '../../../services/error-messages.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  statusInputEmail = 'regular';
  statusInputMessageEmail = '';

  statusInputPassword = 'regular';
  statusInputMessagePassword = '';

  error: string = null;
  errors: string[] = [];

  message: string = null;
  role: string;
  isDriver: any = true;

  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private errorMessages: ErrorMessagesService,
    private navCtrl: NavController
  ) {
    this.formBuilderInput();
   }

  ngOnInit() {
  }

  async login(){
    if(this.form.invalid){
      return;
    }
    this.loading = true;
    await this.loginService.loginWeb(this.form.value).subscribe(async resp =>{      
      this.role = JSON.parse(window.atob(resp['token'].split('.')[1]))["Roles"];
        if(this.role !== 'Power User CEMEX' && this.role !== 'Administrador Logistico Cemex'){
          this.loginService.getData(resp['token']);
          this.errors = [];
          this.navCtrl.navigateRoot('/app/home', {animated:true});
          this.loading = false;
        }else{
          this.loading = false;
        }  
      },
      (error) =>{
        //this.errors = this.errorMessages.parsearErroresAPI(error);
        this.statusInputEmail = 'error';
        this.statusInputPassword = 'error';
        this.loading = false;
      }
    );
  }

  onClickPassword(){
    this.navCtrl.navigateRoot('/reset-password-email', {animated:true});
  }

  /*=============================================
   FORMULARIOS REACTIVOS
  =============================================*/
  formBuilderInput(){
    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
        // Validators.email
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

  /*=============================================
   FUNCIÓN PARA VALIDAR LOS CAMPOS
  =============================================*/
  validateInput(){
    if(this.form.get('email').errors && this.form.get('email').dirty){
      this.statusInputEmail = 'error';
      this.statusInputMessageEmail = 'Este campo es requerido';
     }else{
      this.statusInputEmail = 'regular';
      this.statusInputMessageEmail = '';
     }

     if(this.form.get('password').errors && this.form.get('password').dirty){
      this.statusInputPassword = 'error';
      this.statusInputMessagePassword = 'Este campo es requerido';
     }else{
      this.statusInputPassword = 'regular';
      this.statusInputMessagePassword = '';
     }
  }
}
