import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResolveCenterPage } from './resolve-center.page';

const routes: Routes = [
  {
    path: '',
    component: ResolveCenterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResolveCenterPageRoutingModule {}
