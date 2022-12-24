import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePasswordPageRoutingModule } from './change-password-routing.module';

import { ChangePasswordPage } from './change-password.page';
import { ComponentsModule } from '../../../components/components.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangePasswordPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,    
    NgOtpInputModule,
    CmxWebComponentsModule.forRoot()
  ],
  declarations: [ChangePasswordPage]
})
export class ChangePasswordPageModule {}
