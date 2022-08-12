import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewUpdateMessagePageRoutingModule } from './new-update-message-routing.module';

import { NewUpdateMessagePage } from './new-update-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewUpdateMessagePageRoutingModule
  ],
  declarations: [NewUpdateMessagePage]
})
export class NewUpdateMessagePageModule {}
