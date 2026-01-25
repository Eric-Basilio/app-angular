import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-client-detalhe',
    template: `
    <p>ID: {{client.id}}</p>
    <p>{{client.nome}}</p>
    <p>{{client.descricao}}</p>
    `
})

export class ClientDetalhePageComponent {

client = {id: "0", nome: "", descricao: ""};

constructor ( private activeRouter: ActivatedRoute){}

ngOnInit(){
    const id = this.activeRouter.snapshot.paramMap.get("id");
    if(id){
        this.client = {nome: "Cliente " + id, descricao: "Descrição do cliente " + id, id: id};
    }
 }
}