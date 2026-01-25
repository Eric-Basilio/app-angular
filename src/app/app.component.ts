import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';
  descricao1 = 'Descrição';

  nome = 'João Alberto';

  valores = [{
    descricao: 'teste',
    nome: 'nome',
    id: 1
  }, {
    descricao: 'teste 2',
    nome: 'nome 2',
    id: 2
  }];
  clientePremium=false;

  adicionar(){
    this.valores.push({descricao: 'adicionado', nome: this.nome, id: 3})
  };

  umaData = new Date();
  umDinheiro = 10.50;

}
