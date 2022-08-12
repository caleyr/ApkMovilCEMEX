import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverConfirmedTripDetailPage } from './driver-confirmed-trip-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DriverConfirmedTripDetailPage
  },  {
    path: 'new-update-message',
    loadChildren: () => import('./new-update-message/new-update-message.module').then( m => m.NewUpdateMessagePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverConfirmedTripDetailPageRoutingModule {}
