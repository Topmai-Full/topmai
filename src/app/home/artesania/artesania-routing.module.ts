import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtesaniaPage } from './artesania.page';

const routes: Routes = [
  {
    path: '',
    component: ArtesaniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtesaniaPageRoutingModule {}
