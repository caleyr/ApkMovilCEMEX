import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRolPageRoutingModule } from './select-rol-routing.module';

import { SelectRolPage } from './select-rol.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRolPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SelectRolPage]
})
export class SelectRolPageModule {}
