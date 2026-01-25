import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { ComponentModule } from './components/component.module';
import { FormsModule } from '@angular/forms';
import { BindingPageComponent } from './pages/binding.page.component';
import { ClientListPage } from './pages/client.list.page.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPageComponent,
    ClientListPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
