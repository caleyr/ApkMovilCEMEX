import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsTripRequestPage } from './details-trip-request.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsTripRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsTripRequestPageRoutingModule {}
