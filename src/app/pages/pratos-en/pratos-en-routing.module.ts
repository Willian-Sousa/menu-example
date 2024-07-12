import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratosEnPage } from './pratos-en.page';

const routes: Routes = [
  {
    path: '',
    component: PratosEnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratosEnPageRoutingModule {}
