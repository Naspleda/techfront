import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona/persona';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  id:number;
  persona:Persona;

  constructor(private route:ActivatedRoute,
              private personaService:PersonaService){};

 
              
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.persona = new Persona();
    this.personaService.getPersonaPorId(this.id).subscribe(data => {
      this.persona = data;
    });
  }



}
