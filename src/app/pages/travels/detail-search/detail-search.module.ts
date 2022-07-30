import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSearchPageRoutingModule } from './detail-search-routing.module';

import { DetailSearchPage } from './detail-search.page';
import { ComponentsModule } from '../../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSearchPageRoutingModule,
    ComponentsModule,
    CmxWebComponentsModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [DetailSearchPage]
})
export class DetailSearchPageModule {}
