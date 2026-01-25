import { Component } from "@angular/core";

@Component(
    {
        selector: "app-binding-page",
        template: `
        <h1> Imagem do Angular </h1>
        <img [src]= "imagem" [style]="{width: width, height: height}"/>
        <div class="alert" [class]="sucesso" [style.background-color]="background">
            ALERTA
        </div>
        <button (click)="enviarDados()">Enviar Dados</button>
        `,
        styles: [
            `.alert{
                width: 200px;
                height: 100px;
                border: 1px solid blue;
            }
            .sucess {
                background-color: lightgreen;

            }
            `
        ]
    }
)

export class BindingPageComponent {

imagem = "https://angular.io/assets/images/logos/angular/angular.svg";
width = "300px";
height = "200px";
sucesso = true;
background = "blue";

enviarDados() {
    //this.sucesso = !this.sucesso;
    this.background = "red";
};
}