import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculosPageRoutingModule } from './vehiculos-routing.module';

import { VehiculosPage } from './vehiculos.page';
import {IvyCarouselModule} from 'angular-responsive-carousel';
@NgModule({
  imports: [
    IvyCarouselModule,
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculosPageRoutingModule
  ],
  declarations: [VehiculosPage]
})
export class VehiculosPageModule {}
