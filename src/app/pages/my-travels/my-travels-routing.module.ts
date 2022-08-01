import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTravelsPage } from './my-travels.page';

const routes: Routes = [
  {
    path: '',
    component: MyTravelsPage
  },
  {
    path: 'previous-details',
    loadChildren: () => import('./details-trip-previous/details-trip-previous.module').then( m => m.DetailsTripPreviousPageModule)
  },
  {
    path: 'scheduled-details',
    loadChildren: () => import('./details-trip-scheduled/details-trip-scheduled.component').then( m => m.DetailsTripScheduledComponent)
  },
  {
    path: 'request-details',
    loadChildren: () => import('./details-trip-request/details-trip-request.component').then( m => m.DetailsTripRequestComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTravelsPageRoutingModule {}
