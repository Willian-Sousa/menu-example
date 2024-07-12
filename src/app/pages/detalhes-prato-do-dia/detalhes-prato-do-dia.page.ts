import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { CardapioService } from '../../services/cardapio.service';

@Component({
  selector: 'app-detalhes-prato-do-dia',
  templateUrl: './detalhes-prato-do-dia.page.html',
  styleUrls: ['./detalhes-prato-do-dia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalhesPratoDoDiaPage implements OnInit {

  //variaveis
  pratoEn: any;
  pratoPr: any;
  lanche: any;
  sobremesa: any;
  preco: any;
  precoDesconto: any;
  desconto: any;
  data: Date = new Date();
  diaDaSemana: any;

  constructor(cardapio: CardapioService) {

    //condicoes para selecao dos dias da semana

    if(this.data.getDay() == 1){
      this.diaDaSemana = "Segunda-feira";
      this.pratoEn = cardapio.getPratosEnById(1);
      this.pratoPr = cardapio.getPratosPrById(6);
      this.lanche = cardapio.getLanchesById(16);
      this.sobremesa = cardapio.getSobremesasById(11)
    }else if(this.data.getDay() == 2){
      this.diaDaSemana = "Terça-feira";
      this.pratoEn = cardapio.getPratosEnById(2);
      this.pratoPr = cardapio.getPratosPrById(7);
      this.lanche = cardapio.getLanchesById(17);
      this.sobremesa = cardapio.getSobremesasById(12)
    }else if(this.data.getDay() == 3){
      this.diaDaSemana = "Quarta-feira";
      this.pratoEn = cardapio.getPratosEnById(3);
      this.pratoPr = cardapio.getPratosPrById(8);
      this.lanche = cardapio.getLanchesById(18);
      this.sobremesa = cardapio.getSobremesasById(13)
    }else if(this.data.getDay() == 4){
      this.diaDaSemana = "Quinta-feira";
      this.pratoEn = cardapio.getPratosEnById(4);
      this.pratoPr = cardapio.getPratosPrById(9);
      this.lanche = cardapio.getLanchesById(19);
      this.sobremesa = cardapio.getSobremesasById(14)
    }else if(this.data.getDay() == 5){
      this.diaDaSemana = "Sexta-feira";
      this.pratoEn = cardapio.getPratosEnById(5);
      this.pratoPr = cardapio.getPratosPrById(10);
      this.lanche = cardapio.getLanchesById(20);
      this.sobremesa = cardapio.getSobremesasById(15)
    }

    //Cálculo de desconto
    this.preco = this.pratoEn.preco + this.pratoPr.preco + this.lanche.preco + this.sobremesa.preco;
    this.preco = this.preco.toFixed(2);
    this.desconto = this.preco * 0.3;
    this.precoDesconto = this.preco - this.desconto;
    this.precoDesconto = this.precoDesconto.toFixed(2);

  }

  ngOnInit() {
  }

}
