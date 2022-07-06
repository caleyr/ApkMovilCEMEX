import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclesPageRoutingModule } from './vehicles-routing.module';

import { VehiclesPage } from './vehicles.page';
import { ComponentsModule } from '../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    VehiclesPageRoutingModule,
    ComponentsModule,
    CmxWebComponentsModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [VehiclesPage]
})
export class VehiclesPageModule {}
