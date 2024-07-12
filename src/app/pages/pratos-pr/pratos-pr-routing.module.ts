import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratosPrPage } from './pratos-pr.page';

const routes: Routes = [
  {
    path: '',
    component: PratosPrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratosPrPageRoutingModule {}
