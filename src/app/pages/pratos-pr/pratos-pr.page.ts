import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { CardapioService } from '../../services/cardapio.service';

@Component({
  selector: 'app-pratos-pr',
  templateUrl: './pratos-pr.page.html',
  styleUrls: ['./pratos-pr.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PratosPrPage implements OnInit {

  pratosPr: { id: number; nome: string; descricao: string; preco: number; porcao: string; imagem: string; }[] = [];


  constructor(private router: Router, cardapio: CardapioService) { 
    this.pratosPr = cardapio.getPratosPr();
  }

  ngOnInit() {
  }

  mostrarDetalhes(id: any) {
    id = id + 6;
    this.router.navigate(['detalhes', { id }]);
  }

}
