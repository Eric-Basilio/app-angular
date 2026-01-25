import { Component } from "@angular/core";

@Component({
    selector: "app-binding-page",
    template: `
    <h1> Imagem do Angular </h1>
    <img [src]= "imagem" [style]="{width: width}"/>`
})

export class BindingPageComponent {

imagem = "https://angular.io/assets/images/logos/angular/angular.svg";
width = "300px";

}