import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemElevenPageRoutingModule } from './item-eleven-routing.module';

import { ItemElevenPage } from './item-eleven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemElevenPageRoutingModule
  ],
  // declarations: [ItemElevenPage]
})
export class ItemElevenPageModule {}
