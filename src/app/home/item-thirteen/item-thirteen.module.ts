import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemThirteenPageRoutingModule } from './item-thirteen-routing.module';

import { ItemThirteenPage } from './item-thirteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemThirteenPageRoutingModule
  ],
  // declarations: [ItemThirteenPage]
})
export class ItemThirteenPageModule {}
