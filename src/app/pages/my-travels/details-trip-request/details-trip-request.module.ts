import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsTripRequestPageRoutingModule } from './details-trip-request-routing.module';

import { DetailsTripRequestPage } from './details-trip-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsTripRequestPageRoutingModule
  ],
  declarations: [DetailsTripRequestPage]
})
export class DetailsTripRequestPageModule {}
