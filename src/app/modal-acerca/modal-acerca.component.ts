import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form} from '@angular/forms';

import { PersonaService } from '../service/persona.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-acerca',
  templateUrl: './modal-acerca.component.html',
  styleUrls: ['./modal-acerca.component.css']
})


export class ModalAcercaComponent implements OnInit {

    acercaForm = new FormGroup({
    acerca : new FormControl(''),  //aca va('') en lugar de string
    educacion: new FormControl(''),
    experiencia: new FormControl(''),
    hardsoft: new FormControl('')
   })

   
  constructor(private api:PersonaService, private route:Router ) { }

  ngOnInit(): void {
  }

 
putForm(form:any){    //ModalAcercaComponent
       
  this.api.putForm(form).subscribe(data => {
     console.log(data);
     
   })
 console.log(form);
 
  }


 Ir_a_home() {
 console.log("redirige a ir a home para seguir editando");
 this.route.navigateByUrl('/home');
  }

}



