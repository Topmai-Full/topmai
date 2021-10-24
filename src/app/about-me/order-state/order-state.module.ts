import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderStatePageRoutingModule } from './order-state-routing.module';

import { OrderStatePage } from './order-state.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderStatePageRoutingModule
  ],
  declarations: [OrderStatePage]
})
export class OrderStatePageModule {}
