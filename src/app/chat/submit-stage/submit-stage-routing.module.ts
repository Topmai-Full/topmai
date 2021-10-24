import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitStagePage } from './submit-stage.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitStagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitStagePageRoutingModule {}
