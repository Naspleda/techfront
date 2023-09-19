import { Component } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-extraer-dinero',
  templateUrl: './extraer-dinero.component.html',
  styleUrls: ['./extraer-dinero.component.css']
})
export class ExtraerDineroComponent {

  personaId: number; // Definir la propiedad personaId
  cantidad: number; // Definir la propiedad cantidad

  constructor(private personaService: PersonaService) {}

  extraerDinero(id: number, cantidad: number) {
    this.personaService.extraerDinero(id, cantidad).subscribe(
      (response) => {
        console.log('Respuesta exitosa:', response.nuevoSalario);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
