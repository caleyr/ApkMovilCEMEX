import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTravelsPage } from './my-travels.page';

const routes: Routes = [
  {
    path: '',
    component: MyTravelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTravelsPageRoutingModule {}
