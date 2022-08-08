/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators, NgForm } from '@angular/forms';
import { LoginService } from '../../../services/auth/login.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { debounceTime } from 'rxjs/operators';
import { ErrorMessagesService } from '../../../services/error-messages.service';


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
    this.loading = false;
    await this.loginService.loginWeb(this.form.value).subscribe(async resp =>{ 
      const session : string = JSON.parse(resp.data)["token"];
      this.role = JSON.parse(atob(session.split('.')[1]))["Roles"];
        if(this.role !== 'Power User CEMEX' && this.role !== 'Administrador Logistico Cemex'){
          this.errors = [];
          await this.loginService.saveDataProfile(session);
          await this.loginService.getDataProfile(session);
          this.navCtrl.navigateRoot('/app/home', {animated:true});
          this.loading = false;
        }else{
          this.loading = false;
        }
      },
      (error) =>{
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
