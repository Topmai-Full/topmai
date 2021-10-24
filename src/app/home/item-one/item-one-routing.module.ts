import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemOnePage } from './item-one.page';

const routes: Routes = [
  {
    path: '',
    component: ItemOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemOnePageRoutingModule {}
