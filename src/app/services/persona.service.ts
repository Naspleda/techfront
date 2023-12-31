import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../persona/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  //Esta URL obtiene el listado de todas las personas
  private baseURL = 'http://localhost:8080/api/v1/personas';

  
  constructor(private httpClient: HttpClient) { }

  getListaPersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.baseURL}`);
  }

  registrarPersona(persona:Persona):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, persona);
  }

  actualizarPersona(id:number, persona:Persona): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, persona);
  }

  getPersonaPorId(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.baseURL}/${id}`);
  }

  eliminarPersona(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  ingresarDinero(id: number, cantidad: number):Observable<any> {
    const params = { cantidad: cantidad };
    return this.httpClient.post(`${this.baseURL}/${id}/ingresar-dinero`, params);
  }

  extraerDinero(id: number, cantidad: number):Observable<any> {
    const params = { cantidad: cantidad };
    return this.httpClient.post(`${this.baseURL}/${id}/extraer-dinero`, params);
  }

  transferirDinero(idOrigen: number, idDestino: number, cantidad: number):Observable<any>{
    const params = {
      idOrigen: idOrigen,
      idDestino: idDestino,
      cantidad: cantidad
    };
    return this.httpClient.post(`${this.baseURL}/transferir-dinero`, params);
  }



}
