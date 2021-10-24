import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSeventeenPage } from './item-seventeen.page';

const routes: Routes = [
  {
    path: '',
    component: ItemSeventeenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemSeventeenPageRoutingModule {}
