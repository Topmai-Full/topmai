import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSixteenPage } from './item-sixteen.page';

const routes: Routes = [
  {
    path: '',
    component: ItemSixteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemSixteenPageRoutingModule {}
