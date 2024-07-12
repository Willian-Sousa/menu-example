import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratosPrPageRoutingModule } from './pratos-pr-routing.module';

import { PratosPrPage } from './pratos-pr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratosPrPageRoutingModule
  ],
  declarations: [PratosPrPage]
})
export class PratosPrPageModule {}
