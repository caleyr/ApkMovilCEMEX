import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPageRoutingModule } from './edit-routing.module';

import { EditPage } from './edit.page';
import { EditAdminLogisThirdComponent } from './edit-admin-logis-third/edit-admin-logis-third.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    EditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    EditPage,
    EditAdminLogisThirdComponent,
    EditDriverComponent
  ]
})
export class EditPageModule {}
