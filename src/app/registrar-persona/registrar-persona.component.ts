import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona/persona';
import { PersonaService } from '../services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent implements OnInit {

  persona : Persona = new Persona();
  constructor(private personaService:PersonaService,
              private router:Router
    ) {}


  ngOnInit(): void {  
  }

  guardarPersona(){
    this.personaService.registrarPersona(this.persona).subscribe(data => {
      console.log(data);
      this.redirectToPersonas();
    }, error => console.log(error));
  }

  redirectToPersonas(){
    this.router.navigate(["/personas"]); //Cambiar a la dirección que sea necesario
  }

  onSubmit(){
    this.guardarPersona();
  }


}
