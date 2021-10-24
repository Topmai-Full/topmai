import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemFifteenPage } from './item-fifteen.page';

const routes: Routes = [
  {
    path: '',
    component: ItemFifteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemFifteenPageRoutingModule {}
