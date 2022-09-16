import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { EncabezadoService } from '../service/encabezado.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: persona=new persona("","","","","","","","","","","","","","","","","","","","","","",""); 
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void { this.personaService.getPersona().subscribe(data=> (this.persona=data))  //aca pone esto para poder levantarlo en el componente
  }

}
