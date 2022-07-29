import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDriverPageRoutingModule } from './new-driver-routing.module';

import { NewDriverPage } from './new-driver.page';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewDriverPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [NewDriverPage]
})
export class NewDriverPageModule {}
