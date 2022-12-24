import { NgModule } from '@angular/core';
import { EmailPage } from './email.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { EmailPageRoutingModule } from './email-routing.module';
import { ComponentsModule } from '../../../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    EmailPageRoutingModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [
    EmailPage,
  ]
})
export class EmailPageModule {}
