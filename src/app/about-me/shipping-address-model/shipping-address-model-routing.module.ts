import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippingAddressModelPage } from './shipping-address-model.page';

const routes: Routes = [
  {
    path: '',
    component: ShippingAddressModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingAddressModelPageRoutingModule {}
