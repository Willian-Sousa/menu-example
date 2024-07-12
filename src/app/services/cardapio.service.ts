import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private pratosEn: any [] = [
    {
      "id": 1,
      "nome": "Sushi de Salmão com salada",
      "descricao": "Sushi de salmão com molho de soja, alho e cebola.",
      "preco": 15.00, 
      "porcao": "Serve até 2 pessoas",
      "imagem": "assets/images/sushi.jpg"
    },
    {
      "id": 2,
      "nome": "Set de Sushi tradicionais",
      "descricao": "São 6 Sushi tradicionais de algumas das mais conhecidas regiões do Japão.",
      "preco": 30.00,
      "porcao": "Serve até 2 pessoas",
      "imagem": "assets/images/sushi2.jpg"
    },
    {
      "id": 3,
      "nome": "Sushi de Frutos do Mar",
      "descricao": "Sushi de frutos do mar com ovas de peixe, lula fresca e camarão.",
      "preco": 15.00,
      "porcao": "Serve até 2 pessoas",
      "imagem": "assets/images/sushi3.jpg"
    },
    {
      "id": 4,
      "nome": "Sushi de atum ao molho",
      "descricao": "Sushi de atum ao molho especial da casa.",
      "preco": 23.00,
      "porcao": "Serve até 2 pessoas",
      "imagem": "assets/images/sushi4.jpg"
    },
    {
      "id": 5,
      "nome": "Sushi de Salada com kani",
      "descricao": "Sushi de salada com kani(carangueijo) e ovas de peixe.",
      "preco": 10.00,
      "porcao": "Serve até 2 pessoas",
      "imagem": "assets/images/sushi5.jpg"
    }
  ];

  private pratosPr: any [] = [
    {
      "id": 6,
      "nome": "Udon",
      "descricao": "Udon feito com ingredientes importados, com tecnicas que passam de geração a geração.",
      "preco": 35.00,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/udon.jpg"
    },
    {
      "id": 7,
      "nome": "Yakisoba",
      "descricao": "Yakisoba inspirado nas melhores províncias do Japão.",
      "preco": 40.00,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/yakisoba.jpg"
    },
    {
      "id": 8,
      "nome": "Gyudon",
      "descricao": "Gyudon é um prato muito popular, feito com carne de vaca e muito molho especial.",
      "preco": 34.50,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/gyudon.jpg"
    },
    {
      "id": 9,
      "nome": "Yudofu",
      "descricao": "Yudofu é, basicamente, tufu mergulhado em água quente, acompanhado de molho de soja. Ideal para comer em dias frios, acompanhado de cerveja.",
      "preco": 22.00,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/yudofu.jpg"
    },
    {
      "id": 10,
      "nome": "Shoyu Ramen",
      "descricao": "Um ramem tradicional com caldo à base de molho de soja e um delicioso macarrão, acompanhado com carne de porco e cebolinha, muita cebolinha.",
      "preco": 25.00,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/shoyuRamen.jpg"
    }
  ];

  private sobremesas = [
    {
      "id": 11,
      "nome": "Manjuu",
      "descricao": "Manju é uma especie de biscoito recheado com doce de feijão japoês.",
      "preco": 5.00,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/manjuu.jpg"
    },
    {
      "id": 12,
      "nome": "Ichigo Mochi",
      "descricao": "Delicioso mochi recheado com um morango.",
      "preco": 10.90,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/mochiIchigo.jpg"
    },
    {
      "id": 13,
      "nome": "Dorayaki",
      "descricao": "São duas panquecas de castela com recheio de feijão vermelho adocicado.",
      "preco": 4.99,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/dorayaki.jpg"
    },
    {
      "id": 14,
      "nome": "Dango",
      "descricao": "Dango é um doce à base de farinha de arroz, coberto com um caldo de feijão vermelho adoçado.",
      "preco": 8.50,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/dango.jpg"
    },
    {
      "id": 15,
      "nome": "Taiyaki",
      "descricao": "Um bolinho feito com massa de panqueca assada, em formato de peixe com recheio de pasta de feijão vermelho .",
      "preco": 6.00,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/taiyaki.jpg"
    },
  ];

  private lanches = [
    {
      "id": 16,
      "nome": "Soseji Sando",
      "descricao": "Pão com salsicha e molho de tomate e manjericão.",
      "preco": 7.99,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/sosejiSando.jpg"
    },
    {
      "id": 17,
      "nome": "Katsu Sando",
      "descricao": "Pão de de forma com carne de porco empanada.",
      "preco": 15.00,
      "porcao": "Serve 2 pessoas",
      "imagem": "assets/images/katsuSando.jpg"
    },
    {
      "id": 18,
      "nome": "Tsuna Mayo Sando",
      "descricao": "Pão recheado com pasta de atum, maionese e salada de alface.",
      "preco": 5.50,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/tsunaMayoSando.jpg"
    },
    {
      "id": 19,
      "nome": "Yakisoba Sando",
      "descricao": "Tradicional e amado sandwich de Yakisoba.",
      "preco": 8.99,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/yakisobaSando.jpg"
    },
    {
      "id": 20,
      "nome": "Tamago Sando",
      "descricao": "Pão com ovo mechido no estili japonês.",
      "preco": 5.99,
      "porcao": "Serve 1 pessoa",
      "imagem": "assets/images/tamagoSando.jpg"
    }
  ];

  private bebidas = [
    {
      "id": 21,
      "nome": "Ocha",
      "descricao": "Chá tradicional e muito querido no Japão.",
      "preco": 7.00,
      "porcao": "350ml",
      "imagem": "assets/images/oiOcha.jpg"
    },
    {
      "id": 22,
      "nome": "Calpis Water",
      "descricao": "Água com sabor de Calpis, uma bebida fermentada adorada pelas crianças.",
      "preco": 11.50,
      "porcao": "350ml",
      "imagem": "assets/images/calpisWater.jpg"
    },
    {
      "id": 23,
      "nome": "Meron Soda",
      "descricao": "Um delicioso refrigerante sobor melão.",
      "preco": 9.99,
      "porcao": "350ml",
      "imagem": "assets/images/meronSoda.jpg"
    },
    {
      "id": 24,
      "nome": "Banana Milk",
      "descricao": "Uma deliciosa vitamina de banana com leite, que fará você sentir-se de férias em Okinawa.",
      "preco": 10.90,
      "porcao": "350ml",
      "imagem": "assets/images/bananaMilk.jpg"
    },
    {
      "id": 25,
      "nome": "Kirin Ichiban Shibori (18+)",
      "descricao": "A cerveja mais pedida nos bares de Nagoya.",
      "preco": 18.00,
      "porcao": "350ml",
      "imagem": "assets/images/kirin.jpg"
    }
  ];

  constructor() { }

  getPratosEn(){
    return this.pratosEn;
  }
  getPratosEnById(id: any){
    return this.pratosEn.find(item => item.id == id);
  }

  getPratosPr(){
    return this.pratosPr;
  }
  getPratosPrById(id: any){
    return this.pratosPr.find(item => item.id == id);
  }

  getSobremesas(){
    return this.sobremesas;
  }
  getSobremesasById(id: any){
    return this.sobremesas.find(item => item.id == id);
  }

  getLanches(){
    return this.lanches;
  }
  getLanchesById(id: any){
    return this.lanches.find(item => item.id == id);
  }

  getBebidas(){
    return this.bebidas;
  }
  getBebidasById(id: any){
    return this.bebidas.find(item => item.id == id);
  }
}
