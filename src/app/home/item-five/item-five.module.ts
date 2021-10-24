import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemFivePageRoutingModule } from './item-five-routing.module';

import { ItemFivePage } from './item-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemFivePageRoutingModule
  ],
  // declarations: [ItemFivePage]
})
export class ItemFivePageModule {}
