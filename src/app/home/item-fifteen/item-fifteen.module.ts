import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemFifteenPageRoutingModule } from './item-fifteen-routing.module';

import { ItemFifteenPage } from './item-fifteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemFifteenPageRoutingModule
  ],
  // declarations: [ItemFifteenPage]
})
export class ItemFifteenPageModule {}
