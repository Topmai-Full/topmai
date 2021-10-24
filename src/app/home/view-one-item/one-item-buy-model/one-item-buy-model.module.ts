import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneItemBuyModelPageRoutingModule } from './one-item-buy-model-routing.module';

import { OneItemBuyModelPage } from './one-item-buy-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneItemBuyModelPageRoutingModule
  ],
  declarations: [OneItemBuyModelPage]
})
export class OneItemBuyModelPageModule {}
