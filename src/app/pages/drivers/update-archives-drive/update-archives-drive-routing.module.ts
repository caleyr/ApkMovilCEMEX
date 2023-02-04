import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateArchivesDrivePage } from './update-archives-drive.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateArchivesDrivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateArchivesDrivePageRoutingModule {}
