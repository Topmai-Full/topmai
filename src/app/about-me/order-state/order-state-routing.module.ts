import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderStatePage } from './order-state.page';

const routes: Routes = [
  {
    path: '',
    component: OrderStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderStatePageRoutingModule {}
