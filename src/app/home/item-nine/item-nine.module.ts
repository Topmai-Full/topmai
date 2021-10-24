import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemNinePageRoutingModule } from './item-nine-routing.module';

import { ItemNinePage } from './item-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemNinePageRoutingModule
  ],
  // declarations: [ItemNinePage]
})
export class ItemNinePageModule {}
