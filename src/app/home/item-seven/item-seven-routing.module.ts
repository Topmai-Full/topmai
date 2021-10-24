import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSevenPage } from './item-seven.page';

const routes: Routes = [
  {
    path: '',
    component: ItemSevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemSevenPageRoutingModule {}
