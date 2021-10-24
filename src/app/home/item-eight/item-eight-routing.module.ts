import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemEightPage } from './item-eight.page';

const routes: Routes = [
  {
    path: '',
    component: ItemEightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemEightPageRoutingModule {}
