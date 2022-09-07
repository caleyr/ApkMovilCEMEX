import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverConfirmedTripCemexDetailPageRoutingModule } from './driver-confirmed-trip-cemex-detail-routing.module';

import { DriverConfirmedTripCemexDetailPage } from './driver-confirmed-trip-cemex-detail.page';
import { ModalDetailMapDriveCemexComponent } from './components/modal-detail-map-drive-cemex/modal-detail-map-drive-cemex.component';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverConfirmedTripCemexDetailPageRoutingModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [
    DriverConfirmedTripCemexDetailPage,
    ModalDetailMapDriveCemexComponent
  ]
})
export class DriverConfirmedTripCemexDetailPageModule {}
