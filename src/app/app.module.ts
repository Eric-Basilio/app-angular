import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { ComponentModule } from './components/component.module';
import { FormsModule } from '@angular/forms';
import { BindingPageComponent } from './pages/binding.page.component';
import { ClientListPage } from './pages/client.list.page.component';
import { CustomUppercasePipe } from './pipe/custom-uppercase.pipe';
import { ClientService } from './services/client.service';
import { Filho1PageComponent } from './pages/filho1-page.component';
import { Filho2PageComponent } from './pages/filho2-page.component';
import { PaiPageComponent } from './pages/pai.component';
import { LoginPageComponent } from './pages/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPageComponent,
    ClientListPage,
    CustomUppercasePipe,
    Filho1PageComponent,
    Filho2PageComponent,
    PaiPageComponent,
    ClientListPage,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    FormsModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
