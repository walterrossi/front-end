import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';



@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent implements OnInit {


    persona: persona=new persona("","","","","","","","","","","","","","","","","","","","","","",""); 
    constructor(public personaService: PersonaService) { }
  
    ngOnInit(): void { this.personaService.getPersona().subscribe(data=> (this.persona=data))  //aca pone esto para poder levantarlo en el componente
    }
  
  

}
