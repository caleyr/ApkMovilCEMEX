import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDriveMessagePage } from './new-drive-message.page';

const routes: Routes = [
  {
    path: '',
    component: NewDriveMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDriveMessagePageRoutingModule {}
