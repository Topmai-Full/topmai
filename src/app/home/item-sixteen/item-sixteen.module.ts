import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSixteenPageRoutingModule } from './item-sixteen-routing.module';

import { ItemSixteenPage } from './item-sixteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSixteenPageRoutingModule
  ],
  // declarations: [ItemSixteenPage]
})
export class ItemSixteenPageModule {}
