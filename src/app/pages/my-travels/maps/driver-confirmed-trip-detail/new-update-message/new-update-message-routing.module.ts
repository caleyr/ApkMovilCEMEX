import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewUpdateMessagePage } from './new-update-message.page';

const routes: Routes = [
  {
    path: '',
    component: NewUpdateMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewUpdateMessagePageRoutingModule {}
