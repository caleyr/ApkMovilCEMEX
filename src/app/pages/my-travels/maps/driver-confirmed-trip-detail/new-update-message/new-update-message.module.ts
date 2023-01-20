import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewUpdateMessagePageRoutingModule } from './new-update-message-routing.module';

import { NewUpdateMessagePage } from './new-update-message.page';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewUpdateMessagePageRoutingModule,
    ReactiveFormsModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [NewUpdateMessagePage]
})
export class NewUpdateMessagePageModule {}
