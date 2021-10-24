import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemFourPageRoutingModule } from './item-four-routing.module';

import { ItemFourPage } from './item-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemFourPageRoutingModule
  ],
  // declarations: [ItemFourPage]
})
export class ItemFourPageModule {}
