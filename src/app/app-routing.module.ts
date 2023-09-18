import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { HomeComponent } from './home/home.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'personas', component:ListaPersonasComponent},
  {path: 'registrar', component:RegistrarPersonaComponent},
  {path: 'dashboard/:id', component:DashboardComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
