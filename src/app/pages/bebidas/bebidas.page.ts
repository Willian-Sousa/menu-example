import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { CardapioService } from '../../services/cardapio.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BebidasPage implements OnInit {

  bebidas: { id: number; nome: string; descricao: string; preco: number; porcao: string; imagem: string; }[]= [];

  constructor(private router: Router, cardapio: CardapioService) { 
    this.bebidas = cardapio.getBebidas();
  }

  ngOnInit() {
  }

  mostrarDetalhes(id: any) {
    id = id + 21;
    this.router.navigate(['detalhes', { id }]);
  }

}
