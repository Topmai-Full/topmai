import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationPopoverPage } from './confirmation-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationPopoverPageRoutingModule {}
