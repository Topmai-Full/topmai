import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemTwentyPage } from './item-twenty.page';

const routes: Routes = [
  {
    path: '',
    component: ItemTwentyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemTwentyPageRoutingModule {}
