import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  persona: persona=new persona("","","","","","","","","","","","","","","","","","","","","","","");  /*aca van los campos para leer db mysql   */
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void { this.personaService.getPersona().subscribe(data=> (this.persona=data))  //aca pone esto para poder levantarlo en el componente
  }

}
