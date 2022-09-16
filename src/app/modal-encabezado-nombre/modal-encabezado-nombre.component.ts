import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { EncabezadoimgService } from '../service/encabezadoimg.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-encabezado-nombre',
  templateUrl: './modal-encabezado-nombre.component.html',
  styleUrls: ['./modal-encabezado-nombre.component.css']
})
export class ModalEncabezadoNombreComponent implements OnInit {

  public form:any = FormGroup;

  constructor(private route:Router, private encabezadoImg:EncabezadoimgService, private formBuilder: FormBuilder) { }

  

 ngOnInit(): void {

  this.form= this.formBuilder.group({
    textAreaComentario:['']
   
     //esta la puse de pas para probar
  });
  }



  
  public enviarEncabezadoNombre(){

    this.encabezadoImg.patch ('https://portfoliowalterrossi.herokuapp.com/mnombre/1',
    {
      nombre: this.form.value.textAreaComentario,
    
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















  
      
  
  

 

  
  
  
    
  
  
  


  

 