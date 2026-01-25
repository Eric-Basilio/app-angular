import { Component } from "@angular/core";

@Component(
    {
        selector: "app-binding-page",
        template: `
        <h1> Imagem do Angular </h1>
        <img [src]= "imagem" [style]="{width: width}"/>
        <div class="alert" [class]="{sucess: sucesso}">
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
sucesso = true;

enviarDados() {
    this.sucesso = !this.sucesso;
};
}