import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemThirteenPage } from './item-thirteen.page';

const routes: Routes = [
  {
    path: '',
    component: ItemThirteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemThirteenPageRoutingModule {}
