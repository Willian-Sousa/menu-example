import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratosEnPageRoutingModule } from './pratos-en-routing.module';

import { PratosEnPage } from './pratos-en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratosEnPageRoutingModule
  ],
  declarations: [PratosEnPage]
})
export class PratosEnPageModule {}
