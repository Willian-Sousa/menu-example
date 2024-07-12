import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesPratoDoDiaPage } from './detalhes-prato-do-dia.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesPratoDoDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesPratoDoDiaPageRoutingModule {}
