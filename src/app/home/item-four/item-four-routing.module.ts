import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemFourPage } from './item-four.page';

const routes: Routes = [
  {
    path: '',
    component: ItemFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemFourPageRoutingModule {}
