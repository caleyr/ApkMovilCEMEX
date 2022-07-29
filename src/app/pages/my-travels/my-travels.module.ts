import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTravelsPageRoutingModule } from './my-travels-routing.module';

import { MyTravelsPage } from './my-travels.page';
import { ComponentsModule } from '../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { LayoutPageModule } from '../layout/layout.module';
import { PreviousTripsListComponent } from './components/previous-trips-list/previous-trips-list.component';
import { RequestTravelListComponent } from './components/request-travel-list/request-travel-list.component';
import { ScheduledTripsListComponent } from './components/scheduled-trips-list/scheduled-trips-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTravelsPageRoutingModule,
    ComponentsModule,
    CmxWebComponentsModule.forRoot(),
    ReactiveFormsModule,
    LayoutPageModule,
  ],
  declarations: [
    MyTravelsPage,
    PreviousTripsListComponent,
    RequestTravelListComponent,
    ScheduledTripsListComponent
  ]
})
export class MyTravelsPageModule {}
