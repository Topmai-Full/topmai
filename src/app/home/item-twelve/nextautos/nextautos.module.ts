import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NextautosPageRoutingModule } from './nextautos-routing.module';

import { NextautosPage } from './nextautos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NextautosPageRoutingModule
  ],
  declarations: [NextautosPage]
})
export class NextautosPageModule {}
