import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { CardapioService } from '../../services/cardapio.service';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  styleUrls: ['./sobremesas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SobremesasPage implements OnInit {

  sobremesas: { id: number; nome: string; descricao: string; preco: number; porcao: string; imagem: string; }[] = [];

  constructor(private router: Router, cardapio: CardapioService) { 
    this.sobremesas = cardapio.getSobremesas();
  }

  ngOnInit() {
  }

  mostrarDetalhes(id: any) {
    id = id + 11;
    this.router.navigate(['detalhes', { id }]);
  }

}
