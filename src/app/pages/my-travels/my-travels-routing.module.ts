import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTravelsPage } from './my-travels.page';

const routes: Routes = [
  {
    path: '',
    component: MyTravelsPage,
  },
  {
    path: 'driver-confirmed-trip-detail',
    loadChildren: () => import('./maps/driver-confirmed-trip-detail/driver-confirmed-trip-detail.module').then( m => m.DriverConfirmedTripDetailPageModule)
  },
  {
    path: 'previous-details',
    loadChildren: () => import('./details-trip-previous/details-trip-previous.module').then(m => m.DetailsTripPreviousPageModule)
  },
  {
    path: 'scheduled-details',
    loadChildren: () => import('./details-trip-scheduled/details-trip-scheduled.module').then(m => m.DetailsTripScheduledPageModule)
  },
  {
    path: 'scheduled-details-driver',
    loadChildren: () => import('./details-trip-scheduled-driver/details-trip-scheduled-driver.module').then(m => m.DetailsTripScheduledDriverPageModule)
  },
  {
    path: 'request-details',
    loadChildren: () => import('./details-trip-request/details-trip-request.module').then(m => m.DetailsTripRequestPageModule)
  },
  {
    path: 'admin-track-trip-detail',
    loadChildren: () => import('./maps/admin-track-trip-detail/admin-track-trip-detail.module').then( m => m.AdminTrackTripDetailPageModule)
  },  {
    path: 'driver-confirmed-trip-cemex-detail',
    loadChildren: () => import('./maps/driver-confirmed-trip-cemex-detail/driver-confirmed-trip-cemex-detail.module').then( m => m.DriverConfirmedTripCemexDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTravelsPageRoutingModule { }
