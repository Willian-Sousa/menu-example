import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  //variaveis
  data: Date = new Date();
  diaDaSemana: any;
  dia = this.data.getDay();

  constructor() {

    //condicoes para atribuicao do dia da semana

    if(this.data.getDay() == 1){
      this.diaDaSemana = "Segunda-feira";
    }else if(this.data.getDay() == 2){
      this.diaDaSemana = "Terça-feira";
    }else if(this.data.getDay() == 3){
      this.diaDaSemana = "Quarta-feira";
    }else if(this.data.getDay() == 4){
      this.diaDaSemana = "Quinta-feira";
    }else if(this.data.getDay() == 5){
      this.diaDaSemana = "Sexta-feira";
    }else if(this.data.getDay() == 6){
      this.diaDaSemana = "Sábado";
    }else if(this.data.getDay() == 0){
      this.diaDaSemana = "Domingo";
    }
  }
}
