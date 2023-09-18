import { Component } from '@angular/core';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../persona/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent {

  personas:Persona[];

  constructor(private personaService:PersonaService,
              private router:Router) {}

  ngOnInit(): void {
  this.getPersonas();
}

  private getPersonas(){
    this.personaService.getListaPersonas().subscribe(data => {
      this.personas = data;
    })
  }

  actualizarPersona(id:number){
    this.router.navigate(['actualizar-persona',id]);
  }


  eliminarPersona(id:number){
    this.personaService.eliminarPersona(id).subscribe(data => {
      console.log(data);
      this.getPersonas();
    })
  }




}
