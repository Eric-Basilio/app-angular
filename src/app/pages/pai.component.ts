import { Component } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";

@Component({
    selector: 'app-pai',
    template: `<h1>No component pai</h1>
    <a [routerLink]="['filho1']"> Ir para Componente Filho 1</a> <br>
    <a [routerLink]="['filho2']"> Ir para Componente Filho 2</a> <br>
    <router-outlet></router-outlet>`
})

export class PaiPageComponent { }