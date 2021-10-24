import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemNighteenPage } from './item-nighteen.page';

const routes: Routes = [
  {
    path: '',
    component: ItemNighteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemNighteenPageRoutingModule {}
