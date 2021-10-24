import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemFivePage } from './item-five.page';

const routes: Routes = [
  {
    path: '',
    component: ItemFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemFivePageRoutingModule {}
