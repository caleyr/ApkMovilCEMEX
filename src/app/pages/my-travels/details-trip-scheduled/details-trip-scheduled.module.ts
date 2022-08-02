import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsTripScheduledPageRoutingModule } from './details-trip-scheduled-routing.module';

import { DetailsTripScheduledPage } from './details-trip-scheduled.page';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmxWebComponentsModule.forRoot(),
    DetailsTripScheduledPageRoutingModule
  ],
  declarations: [DetailsTripScheduledPage]
})
export class DetailsTripScheduledPageModule {}
