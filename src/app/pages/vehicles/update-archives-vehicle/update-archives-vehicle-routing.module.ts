import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateArchivesVehiclePage } from './update-archives-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateArchivesVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateArchivesVehiclePageRoutingModule {}
