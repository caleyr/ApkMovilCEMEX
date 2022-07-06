import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVehiclePageRoutingModule } from './update-vehicle-routing.module';

import { UpdateVehiclePage } from './update-vehicle.page';
import { ComponentsModule } from '../../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UpdateVehiclePageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [UpdateVehiclePage]
})
export class UpdateVehiclePageModule {}
