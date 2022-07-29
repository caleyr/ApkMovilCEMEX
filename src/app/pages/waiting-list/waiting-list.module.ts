import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingListPageRoutingModule } from './waiting-list-routing.module';

import { WaitingListPage } from './waiting-list.page';
import { ComponentsModule } from '../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { LayoutPageModule } from '../layout/layout.module';
import { RequestWaitingListComponent } from './components/request-waiting-list/request-waiting-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingListPageRoutingModule,
    ComponentsModule,
    CmxWebComponentsModule.forRoot(),
    ReactiveFormsModule,
    LayoutPageModule,
  ],
  declarations: [
    WaitingListPage,    
    RequestWaitingListComponent
  ]
})
export class WaitingListPageModule {}
