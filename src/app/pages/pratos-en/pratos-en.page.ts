import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { Router } from '@angular/router';
import { CardapioService } from '../../services/cardapio.service';

@Component({
  selector: 'app-pratos-en',
  templateUrl: './pratos-en.page.html',
  styleUrls: ['./pratos-en.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PratosEnPage implements OnInit {

  pratosEn: { id: number; nome: string; descricao: string; preco: number; porcao: string; imagem: string; }[] = [];
  

  constructor(private router : Router, cardapio: CardapioService) { 
    this.pratosEn = cardapio.getPratosEn();
  }

  ngOnInit() {
  }

  mostrarDetalhes(id:any){
    id = id + 1;
    this.router.navigate(['detalhes', {id}]);
  }

}
