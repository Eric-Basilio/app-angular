import { Component, OnInit, OnDestroy } from "@angular/core";
import { filter, interval, map, of, pipe, Subscription, tap, range, BehaviorSubject } from "rxjs";

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs-page.html',
})

export class RXJSPageComponent implements OnInit {

    itens: Array <number> = [];

    subscription!: Subscription;

    observable = interval(1000);

    observable2= range(1, 10);

    subject = new BehaviorSubject("Valor Inicial");

    ultimoEvento= "";

    contador = 1;

    constructor() { }

     ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit() {
        /* this.subscription = this.observable
        
        .pipe(
            map((x: number) => x * 2),
            filter((x: number) => x <10),
            tap((x) => console.log(x))
        )
        
        .subscribe((item => {
            this.itens.push(item);
        }))*/ 
       /* this.observable2.subscribe(item => {
        this.itens.push(item)
       }) */

        this.subject.asObservable().subscribe((item) => {
            this.ultimoEvento = item;
        })
    }

    desinscrever(){
        this.subscription.unsubscribe();
    }

    emitirEvento(){
        this.subject.next("Próximo item " + this.contador);
        this.contador++;
    }

   

}