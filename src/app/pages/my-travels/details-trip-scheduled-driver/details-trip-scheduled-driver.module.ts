import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsTripScheduledDriverPageRoutingModule } from './details-trip-scheduled-driver-routing.module';

import { DetailsTripScheduledDriverPage } from './details-trip-scheduled-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsTripScheduledDriverPageRoutingModule
  ],
  declarations: [DetailsTripScheduledDriverPage]
})
export class DetailsTripScheduledDriverPageModule {}
