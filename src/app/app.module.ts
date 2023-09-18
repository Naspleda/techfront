import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component'
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { ExtraerDineroComponent } from './extraer-dinero/extraer-dinero.component';
import { IngresarDineroComponent } from './ingresar-dinero/ingresar-dinero.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    HomeComponent,
    RegistrarPersonaComponent,
    DashboardComponent,
    TransferenciasComponent,
    ExtraerDineroComponent,
    IngresarDineroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
