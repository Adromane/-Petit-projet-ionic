import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnimisPage } from './enimis.page';

const routes: Routes = [
  {
    path: '',
    component: EnimisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnimisPageRoutingModule {}
