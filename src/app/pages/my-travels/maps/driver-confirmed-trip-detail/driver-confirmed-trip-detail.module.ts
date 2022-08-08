import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverConfirmedTripDetailPageRoutingModule } from './driver-confirmed-trip-detail-routing.module';

import { DriverConfirmedTripDetailPage } from './driver-confirmed-trip-detail.page';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { ModalDetailMapDriveComponent } from './components/modal-detail-map-drive/modal-detail-map-drive.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverConfirmedTripDetailPageRoutingModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [
    DriverConfirmedTripDetailPage,
    ModalDetailMapDriveComponent
  ]
})
export class DriverConfirmedTripDetailPageModule {}
