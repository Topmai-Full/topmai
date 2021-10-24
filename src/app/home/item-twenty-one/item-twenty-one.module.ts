import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemTwentyOnePageRoutingModule } from './item-twenty-one-routing.module';

import { ItemTwentyOnePage } from './item-twenty-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemTwentyOnePageRoutingModule
  ],
  // declarations: [ItemTwentyOnePage]
})
export class ItemTwentyOnePageModule {}
