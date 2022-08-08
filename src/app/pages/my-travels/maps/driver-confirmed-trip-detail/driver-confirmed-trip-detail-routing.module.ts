import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverConfirmedTripDetailPage } from './driver-confirmed-trip-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DriverConfirmedTripDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverConfirmedTripDetailPageRoutingModule {}
