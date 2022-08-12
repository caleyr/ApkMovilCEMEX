import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTrackTripDetailPageRoutingModule } from './admin-track-trip-detail-routing.module';

import { AdminTrackTripDetailPage } from './admin-track-trip-detail.page';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { ModalDetailMapAdminComponent } from './components/modal-detail-map-admin/modal-detail-map-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTrackTripDetailPageRoutingModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [
    AdminTrackTripDetailPage,
    ModalDetailMapAdminComponent
  ]
})
export class AdminTrackTripDetailPageModule {}
