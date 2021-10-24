import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemEighteenPage } from './item-eighteen.page';

const routes: Routes = [
  {
    path: '',
    component: ItemEighteenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemEighteenPageRoutingModule {}
