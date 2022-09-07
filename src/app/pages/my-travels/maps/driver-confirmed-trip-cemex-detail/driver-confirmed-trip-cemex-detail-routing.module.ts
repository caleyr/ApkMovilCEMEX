import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverConfirmedTripCemexDetailPage } from './driver-confirmed-trip-cemex-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DriverConfirmedTripCemexDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverConfirmedTripCemexDetailPageRoutingModule {}
