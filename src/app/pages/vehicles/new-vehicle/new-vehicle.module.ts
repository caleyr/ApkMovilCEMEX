import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewVehiclePageRoutingModule } from './new-vehicle-routing.module';

import { NewVehiclePage } from './new-vehicle.page';
import { ComponentsModule } from '../../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    NewVehiclePageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [NewVehiclePage]
})
export class NewVehiclePageModule {}
