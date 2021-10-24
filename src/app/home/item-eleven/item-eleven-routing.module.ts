import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemElevenPage } from './item-eleven.page';

const routes: Routes = [
  {
    path: '',
    component: ItemElevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemElevenPageRoutingModule {}
