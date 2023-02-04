import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { RegisterMantruckComponent } from './components/register-mantruck/register-mantruck.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RegisterAdminLogistThirdComponent } from './components/register-admin-logist-third/register-admin-logist-third.component';
import { RegisterDriverComponent } from './components/register-driver/register-driver.component';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [
    RegisterPage,
    RegisterDriverComponent,
    RegisterMantruckComponent,
    RegisterAdminLogistThirdComponent
  ]
})
export class RegisterPageModule {}
