import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlusPopupModelPage } from './plus-popup-model.page';

const routes: Routes = [
  {
    path: '',
    component: PlusPopupModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlusPopupModelPageRoutingModule {}
