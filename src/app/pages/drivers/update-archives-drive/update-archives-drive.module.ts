import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateArchivesDrivePageRoutingModule } from './update-archives-drive-routing.module';

import { UpdateArchivesDrivePage } from './update-archives-drive.page';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    UpdateArchivesDrivePageRoutingModule,
    CmxWebComponentsModule.forRoot()
  ],
  declarations: [UpdateArchivesDrivePage]
})
export class UpdateArchivesDrivePageModule {}
