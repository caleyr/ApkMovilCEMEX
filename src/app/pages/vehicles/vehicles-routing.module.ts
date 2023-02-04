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
    path: 'actualizar',
    loadChildren: () => import('./update-vehicle/update-vehicle.module').then( m => m.UpdateVehiclePageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./vehicle-details/vehicle-details.module').then( m => m.VehicleDetailsPageModule)
  },
  {
    path: 'actualizar-documentos',
    loadChildren: () => import('./update-archives-vehicle/update-archives-vehicle.module').then( m => m.UpdateArchivesVehiclePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclesPageRoutingModule {}
