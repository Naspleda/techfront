import { Component } from '@angular/core';
import { PersonaService } from '../services/persona.service';


@Component({
  selector: 'app-ingresar-dinero',
  templateUrl: './ingresar-dinero.component.html',
  styleUrls: ['./ingresar-dinero.component.css']
})
export class IngresarDineroComponent {

  personaId: number; // Definir la propiedad personaId
  cantidad: number; // Definir la propiedad cantidad

  constructor(private personaService: PersonaService) {}

  ingresarDinero(id: number, cantidad: number) {
    this.personaService.ingresarDinero(id, cantidad).subscribe(
      (response) => {
        console.log('Respuesta exitosa:', response.nuevoSaldoDestino);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
