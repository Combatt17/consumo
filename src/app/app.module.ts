import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComponent } from './ejemplo/equipo/equipo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './ejemplo/lista/lista.component';
import { AgregarComponent } from './ejemplo/agregar/agregar.component';


@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    ListaComponent,
    AgregarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
