import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { LayoutPageModule } from '../layout/layout.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    HomePageRoutingModule,
    LayoutPageModule,    
    CmxWebComponentsModule.forRoot(),
  ],
  declarations: [
    HomePage,
    HomeUserComponent,
    HomeAdminComponent
  ]
})
export class HomePageModule {}
