import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { HomeComponent } from './home/home.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { ExtraerDineroComponent } from './extraer-dinero/extraer-dinero.component';
import { IngresarDineroComponent } from './ingresar-dinero/ingresar-dinero.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'personas', component:ListaPersonasComponent},
  {path: 'registrar', component:RegistrarPersonaComponent},
  {path: 'dashboard/:id', component:DashboardComponent},
  {path: 'ingresar-dinero', component:IngresarDineroComponent},
  {path: 'extraer-dinero', component:ExtraerDineroComponent},
  {path: 'transferencias', component:TransferenciasComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
