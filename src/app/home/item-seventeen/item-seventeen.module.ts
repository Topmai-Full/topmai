import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSeventeenPageRoutingModule } from './item-seventeen-routing.module';

import { ItemSeventeenPage } from './item-seventeen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSeventeenPageRoutingModule
  ],
  // declarations: [ItemSeventeenPage]
})
export class ItemSeventeenPageModule {}
