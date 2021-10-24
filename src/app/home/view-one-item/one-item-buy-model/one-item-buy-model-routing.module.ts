import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneItemBuyModelPage } from './one-item-buy-model.page';

const routes: Routes = [
  {
    path: '',
    component: OneItemBuyModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneItemBuyModelPageRoutingModule {}
