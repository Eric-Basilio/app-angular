import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/users.service";
import { BrowserModule } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { User } from "../model/user";

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
})

export class UserPageComponent implements OnInit {

    users!: Observable<User[]>
    constructor(private service: UserService){}

    ngOnInit(){
        this.users = this.service.getUsers()
    }

    editar(user: User){
        const editado = user;
        editado.name = "New Name"
        this.service.putUser(user.id, editado);
    }

    novoUser(){
        const user: User ={
            id: 545612,
            name: "novo usuário",
            email: "airgagrkm@tkjtj.com",
            gender: "all",
            status: "all"
        }
        this.service.postUser(user)
    }

    deletarUser(user: User){
        this.service.deleteUser(user.id)
    }

}