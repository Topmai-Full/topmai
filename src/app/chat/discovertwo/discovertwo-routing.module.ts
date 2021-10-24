import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscovertwoPage } from './discovertwo.page';

const routes: Routes = [
  {
    path: '',
    component: DiscovertwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscovertwoPageRoutingModule {}
