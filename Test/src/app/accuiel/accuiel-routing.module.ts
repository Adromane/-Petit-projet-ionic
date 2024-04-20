import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccuielPage } from './accuiel.page';

const routes: Routes = [
  {
    path: '',
    component: AccuielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccuielPageRoutingModule {}
