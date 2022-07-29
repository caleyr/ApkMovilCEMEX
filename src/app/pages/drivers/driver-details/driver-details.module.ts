import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverDetailsPageRoutingModule } from './driver-details-routing.module';

import { DriverDetailsPage } from './driver-details.page';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverDetailsPageRoutingModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [DriverDetailsPage]
})
export class DriverDetailsPageModule {}
