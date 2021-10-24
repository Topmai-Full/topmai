import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextautosPage } from './nextautos.page';

const routes: Routes = [
  {
    path: '',
    component: NextautosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextautosPageRoutingModule {}
