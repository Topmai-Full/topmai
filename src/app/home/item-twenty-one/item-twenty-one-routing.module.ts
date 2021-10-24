import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemTwentyOnePage } from './item-twenty-one.page';

const routes: Routes = [
  {
    path: '',
    component: ItemTwentyOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemTwentyOnePageRoutingModule {}
