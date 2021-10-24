import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemTenPageRoutingModule } from './item-ten-routing.module';

import { ItemTenPage } from './item-ten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemTenPageRoutingModule
  ],
  // declarations: [ItemTenPage]
})
export class ItemTenPageModule {}
