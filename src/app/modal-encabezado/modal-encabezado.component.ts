import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';

import { EncabezadoService } from '../service/encabezado.service';
import { Router } from '@angular/router';



import { EncabezadoEditComponent } from '../encabezado-edit/encabezado-edit.component';




@Component({
  selector: 'app-modal-encabezado',
  templateUrl: './modal-encabezado.component.html',
  styleUrls: ['./modal-encabezado.component.css']
})



export class ModalEncabezadoComponent implements OnInit {

  public form:any = FormGroup;
 
  constructor(private route:Router, private encabezado: EncabezadoService, private formBuilder: FormBuilder) { 
  
      
  

  
      
  
  }

  


 ngOnInit(): void {

  this.form= this.formBuilder.group({
    textAreaComentario:['']
   
     //esta la puse de pas para probar
  });
  }

 

  public enviarEncabezado(){

    this.encabezado.patch ('https://portfoliowalterrossi.herokuapp.com/mUrl-img-persona/1',
    {
      url_img_persona: this.form.value.textAreaComentario,
    
        //ACA LE POMGO EL NOMBRE DEL CAMPO A MODIFICAR, COMO SE LLAME EN LA BASE DE DATOS
    }                                                //VOY FIJANDO EL REGISTRO, /mapellido/4
    //a url_img_persona  lo sacamos de mysql el campo donde se guarda el registro
    ).subscribe(Response=> console.log('Encabezado enviado!'));
  
  
  
    
  }
  
  
  


  

  Ir_a_home() {
    console.log("redirige a ir a home para seguir editando");
    this.route.navigateByUrl('/home');
     }





    }
