import { Component, OnInit } from "@angular/core";
import { Pessoa } from "../model/pessoas";
import { PessoasService } from "../services/pessoas.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-lista-pessoas',
    templateUrl: './lista-pessoas-page.component.html'
})

export class ListaPessoasPage implements OnInit {

    pessoas!: Observable<Pessoa[]>

    constructor(private service: PessoasService){};

    ngOnInit() {};

    salvar(pessoa: Pessoa){
        this.service.salvar(pessoa)
    };

    listar(){
        this.pessoas = this.service.listar()
    };

}