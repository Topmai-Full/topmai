import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSevenPageRoutingModule } from './item-seven-routing.module';

import { ItemSevenPage } from './item-seven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSevenPageRoutingModule
  ],
  // declarations: [ItemSevenPage]
})
export class ItemSevenPageModule {}
