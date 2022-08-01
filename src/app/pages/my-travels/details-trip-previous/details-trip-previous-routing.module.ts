import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsTripPreviousPage } from './details-trip-previous.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsTripPreviousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsTripPreviousPageRoutingModule {}
