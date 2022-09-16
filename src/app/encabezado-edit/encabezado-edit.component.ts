import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';



@Component({
  selector: 'app-encabezado-edit',
  templateUrl: './encabezado-edit.component.html',
  styleUrls: ['./encabezado-edit.component.css']
})

export class EncabezadoEditComponent implements OnInit {
  persona: persona=new persona("","","","","","","","","","","","","","","","","","","","","","",""); 
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void { this.personaService.getPersona().subscribe(data=> (this.persona=data))  //aca pone esto para poder levantarlo en el componente
  }

}