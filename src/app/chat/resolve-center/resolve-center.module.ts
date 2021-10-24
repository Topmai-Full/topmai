import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResolveCenterPageRoutingModule } from './resolve-center-routing.module';

import { ResolveCenterPage } from './resolve-center.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResolveCenterPageRoutingModule
  ],
  declarations: [ResolveCenterPage]
})
export class ResolveCenterPageModule {}
