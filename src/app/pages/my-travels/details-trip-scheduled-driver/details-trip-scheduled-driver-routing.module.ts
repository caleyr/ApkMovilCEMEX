import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsTripScheduledDriverPage } from './details-trip-scheduled-driver.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsTripScheduledDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsTripScheduledDriverPageRoutingModule {}
