import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemTwentyPageRoutingModule } from './item-twenty-routing.module';

import { ItemTwentyPage } from './item-twenty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemTwentyPageRoutingModule
  ],
  // declarations: [ItemTwentyPage]
})
export class ItemTwentyPageModule {}
