import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemEighteenPageRoutingModule } from './item-eighteen-routing.module';

import { ItemEighteenPage } from './item-eighteen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemEighteenPageRoutingModule
  ],
  // declarations: [ItemEighteenPage]
})
export class ItemEighteenPageModule {}
