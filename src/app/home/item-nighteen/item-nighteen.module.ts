import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemNighteenPageRoutingModule } from './item-nighteen-routing.module';

import { ItemNighteenPage } from './item-nighteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemNighteenPageRoutingModule
  ],
  // declarations: [ItemNighteenPage]
})
export class ItemNighteenPageModule {}
