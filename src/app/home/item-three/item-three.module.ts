import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemThreePageRoutingModule } from './item-three-routing.module';

import { ItemThreePage } from './item-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemThreePageRoutingModule
  ],
  // declarations: [ItemThreePage]
})
export class ItemThreePageModule {}
