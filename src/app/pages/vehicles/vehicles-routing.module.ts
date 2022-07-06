import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesPage } from './vehicles.page';

const routes: Routes = [
  {
    path: '',
    component: VehiclesPage
  },
  {
    path: 'agregar',
    loadChildren: () => import('./new-vehicle/new-vehicle.module').then( m => m.NewVehiclePageModule)
  },
  {
    path: 'update-vehicle',
    loadChildren: () => import('./update-vehicle/update-vehicle.module').then( m => m.UpdateVehiclePageModule)
  },
  {
    path: 'vehicle-details',
    loadChildren: () => import('./vehicle-details/vehicle-details.module').then( m => m.VehicleDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclesPageRoutingModule {}
