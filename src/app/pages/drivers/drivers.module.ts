import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriversPageRoutingModule } from './drivers-routing.module';

import { DriversPage } from './drivers.page';
import { LayoutPageModule } from '../layout/layout.module';
import { ComponentsModule } from '../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { DriverListComponent } from './components/driver-list/driver-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    DriversPageRoutingModule,
    LayoutPageModule,
    ComponentsModule,
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [
    DriversPage,
    DriverListComponent
  ]
})
export class DriversPageModule {}
