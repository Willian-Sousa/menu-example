import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { CardapioService } from '../../services/cardapio.service';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LanchesPage implements OnInit {

  lanches: { id: number; nome: string; descricao: string; preco: number; porcao: string; imagem: string; }[] = [];

  constructor(private route: Router, cardapio: CardapioService) { 
    this.lanches = cardapio.getLanches();
  }

  ngOnInit() {
  }

  mostrarDetalhes(id: any) {
    id = id + 16;
    this.route.navigate(['detalhes', { id }]);
  }

}
