import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemEightPageRoutingModule } from './item-eight-routing.module';

import { ItemEightPage } from './item-eight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemEightPageRoutingModule
  ],
  // declarations: [ItemEightPage]
})
export class ItemEightPageModule {}
