import { Component } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent {

  idOrigen: number;
  idDestino: number;
  cantidad: number;

  constructor(private personaService: PersonaService) { }

  transferirDinero(idOrigen: number, idDestino: number, cantidad: number){
    this.personaService.transferirDinero(idOrigen, idDestino, cantidad).subscribe(
      (response) => {
        // Manejar la respuesta exitosa aquí
        console.log('Transferencia exitosa, nuevo saldo', response.nuevoSaldoDestino);
        console.log('Transferencia exitosa, nuevo saldo', response.resultadoExtraccion);
      },
      (error) => {
        // Manejar errores aquí
        console.error('Error al transferir dinero', error);
      }
    );
    }

}
