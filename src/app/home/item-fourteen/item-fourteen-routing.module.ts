import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemFourteenPage } from './item-fourteen.page';

const routes: Routes = [
  {
    path: '',
    component: ItemFourteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemFourteenPageRoutingModule {}
