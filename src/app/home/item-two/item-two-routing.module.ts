import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemTwoPage } from './item-two.page';

const routes: Routes = [
  {
    path: '',
    component: ItemTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemTwoPageRoutingModule {}
