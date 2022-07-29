import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversPage } from './drivers.page';

const routes: Routes = [
  {
    path: '',
    component: DriversPage
  },
  {
    path: 'agregar',
    loadChildren: () => import('./new-driver/new-driver.module').then( m => m.NewDriverPageModule)
  },
  {
    path: 'actualizar',
    loadChildren: () => import('./update-driver/update-driver.module').then( m => m.UpdateDriverPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./driver-details/driver-details.module').then( m => m.DriverDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversPageRoutingModule {}
