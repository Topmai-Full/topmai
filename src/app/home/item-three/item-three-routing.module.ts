import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemThreePage } from './item-three.page';

const routes: Routes = [
  {
    path: '',
    component: ItemThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemThreePageRoutingModule {}
