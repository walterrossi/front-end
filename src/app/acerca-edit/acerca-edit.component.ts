import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-acerca-edit',
  templateUrl: './acerca-edit.component.html',
  styleUrls: ['./acerca-edit.component.css']
})
export class AcercaEditComponent implements OnInit {

  persona: persona=new persona("","","","","","","","","","","","","","","","","","","","","","","");  /*aca van los campos para leer db mysql   */
     
    constructor(public personaService: PersonaService) { }
  
    ngOnInit(): void {
      this.personaService.getPersona().subscribe(data=> (this.persona=data))  //aca pone esto para poder levantarlo en el componente
    }

  }