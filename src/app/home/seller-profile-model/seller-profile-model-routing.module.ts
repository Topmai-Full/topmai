import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerProfileModelPage } from './seller-profile-model.page';

const routes: Routes = [
  {
    path: '',
    component: SellerProfileModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerProfileModelPageRoutingModule {}
