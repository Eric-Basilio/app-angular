import { Component } from "@angular/core";

@Component({
    selector: 'app-client-page',
    templateUrl: './client.list.page.component.html'
})

export class ClientListPage {
clientePremium = true
clients = ['Cliente 1', 'Cliente 2', 'Cliente 3']
}