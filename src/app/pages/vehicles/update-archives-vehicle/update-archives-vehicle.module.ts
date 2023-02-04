import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateArchivesVehiclePageRoutingModule } from './update-archives-vehicle-routing.module';

import { UpdateArchivesVehiclePage } from './update-archives-vehicle.page';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    UpdateArchivesVehiclePageRoutingModule,
    CmxWebComponentsModule.forRoot()
  ],
  declarations: [UpdateArchivesVehiclePage]
})
export class UpdateArchivesVehiclePageModule {}
