import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsTripPreviousPageRoutingModule } from './details-trip-previous-routing.module';

import { DetailsTripPreviousPage } from './details-trip-previous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmxWebComponentsModule.forRoot(),
    DetailsTripPreviousPageRoutingModule
  ],
  declarations: [DetailsTripPreviousPage]
})
export class DetailsTripPreviousPageModule {}
