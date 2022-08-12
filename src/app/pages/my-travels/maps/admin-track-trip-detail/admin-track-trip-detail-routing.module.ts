import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTrackTripDetailPage } from './admin-track-trip-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTrackTripDetailPage
  },
  {
    path: 'new-drive-message',
    loadChildren: () => import('./new-drive-message/new-drive-message.module').then( m => m.NewDriveMessagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTrackTripDetailPageRoutingModule {}
