import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDriveMessagePageRoutingModule } from './new-drive-message-routing.module';

import { NewDriveMessagePage } from './new-drive-message.page';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDriveMessagePageRoutingModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [NewDriveMessagePage]
})
export class NewDriveMessagePageModule {}
