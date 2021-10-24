import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleosPageRoutingModule } from './empleos-routing.module';

import { EmpleosPage } from './empleos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleosPageRoutingModule
  ],
  // declarations: [EmpleosPage]
})
export class EmpleosPageModule {}
