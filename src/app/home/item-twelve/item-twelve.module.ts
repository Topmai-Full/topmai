import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemTwelvePageRoutingModule } from './item-twelve-routing.module';

import { ItemTwelvePage } from './item-twelve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemTwelvePageRoutingModule
  ],
  // declarations: [ItemTwelvePage]
})
export class ItemTwelvePageModule {}
