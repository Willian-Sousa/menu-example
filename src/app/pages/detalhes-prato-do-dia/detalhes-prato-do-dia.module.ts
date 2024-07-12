import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesPratoDoDiaPageRoutingModule } from './detalhes-prato-do-dia-routing.module';

import { DetalhesPratoDoDiaPage } from './detalhes-prato-do-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesPratoDoDiaPageRoutingModule
  ],
  declarations: [DetalhesPratoDoDiaPage]
})
export class DetalhesPratoDoDiaPageModule {}
