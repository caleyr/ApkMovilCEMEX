import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { UpdateArchivesPageRoutingModule } from './update-archives-routing.module';

import { UpdateArchivesPage } from './update-archives.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    UpdateArchivesPageRoutingModule,
    CmxWebComponentsModule.forRoot()
  ],
  declarations: [
    UpdateArchivesPage
  ]
})
export class UpdateArchivesPageModule {}
