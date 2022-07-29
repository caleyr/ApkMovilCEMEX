import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDriverPageRoutingModule } from './update-driver-routing.module';

import { UpdateDriverPage } from './update-driver.page';
import { ComponentsModule } from '../../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UpdateDriverPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [UpdateDriverPage]
})
export class UpdateDriverPageModule {}
