import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShippingAddressModelPageRoutingModule } from './shipping-address-model-routing.module';

import { ShippingAddressModelPage } from './shipping-address-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShippingAddressModelPageRoutingModule
  ],
  declarations: [ShippingAddressModelPage]
})
export class ShippingAddressModelPageModule {}
