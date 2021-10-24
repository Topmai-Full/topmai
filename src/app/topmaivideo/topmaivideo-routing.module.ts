import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopmaivideoPage } from './topmaivideo.page';

const routes: Routes = [
  {
    path: '',
    component: TopmaivideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopmaivideoPageRoutingModule {}
