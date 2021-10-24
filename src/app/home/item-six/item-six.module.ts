import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemSixPageRoutingModule } from './item-six-routing.module';

import { ItemSixPage } from './item-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemSixPageRoutingModule
  ],
  // declarations: [ItemSixPage]
})
export class ItemSixPageModule {}
