import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListPage } from './contact-list.page';

const routes: Routes = [
  {
    path: '',
    component: ContactListPage
  },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactListPageRoutingModule {}
