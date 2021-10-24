import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemSixPage } from './item-six.page';

const routes: Routes = [
  {
    path: '',
    component: ItemSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemSixPageRoutingModule {}
