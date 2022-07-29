import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchListPageRoutingModule } from './search-list-routing.module';

import { SearchListPage } from './search-list.page';
import { ComponentsModule } from '../../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchListPageRoutingModule,
    ComponentsModule,
    CmxWebComponentsModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [SearchListPage]
})
export class SearchListPageModule {}
