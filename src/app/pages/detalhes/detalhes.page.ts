import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { CardapioService } from 'src/app/services/cardapio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalhesPage implements OnInit {

  items: any;
  id: any;
  
  constructor(cardapio: CardapioService, actvatedRote: ActivatedRoute) { 
    this.id = actvatedRote.snapshot.paramMap.get('id');
    if(this.id < 6){
    this.items = cardapio.getPratosEnById(this.id);
    }else if(this.id > 5 && this.id < 11){
    this.items = cardapio.getPratosPrById(this.id);
    }else if(this.id > 10 && this.id < 16){
    this.items = cardapio.getSobremesasById(this.id);
    }else if(this.id > 15 && this.id < 21){
    this.items = cardapio.getLanchesById(this.id);
    }else if(this.id > 20 && this.id < 26){
      this.items = cardapio.getBebidasById(this.id);
    }
  }

  ngOnInit() {
  }

}
