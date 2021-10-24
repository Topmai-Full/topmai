import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemFourteenPageRoutingModule } from './item-fourteen-routing.module';

import { ItemFourteenPage } from './item-fourteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemFourteenPageRoutingModule
  ],
  // declarations: [ItemFourteenPage]
})
export class ItemFourteenPageModule {}
