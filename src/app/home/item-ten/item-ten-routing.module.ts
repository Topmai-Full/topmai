import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemTenPage } from './item-ten.page';

const routes: Routes = [
  {
    path: '',
    component: ItemTenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemTenPageRoutingModule {}
