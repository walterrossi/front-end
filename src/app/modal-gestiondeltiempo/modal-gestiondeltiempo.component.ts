import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { SoftgestionService } from '../service/softgestion.service';



@Component({
  selector: 'app-modal-gestiondeltiempo',
  templateUrl: './modal-gestiondeltiempo.component.html',
  styleUrls: ['./modal-gestiondeltiempo.component.css']
})
export class ModalGestiondeltiempoComponent implements OnInit {

  public form:any = FormGroup;
 
  constructor(private route:Router, private softGestion: SoftgestionService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

      this.form= this.formBuilder.group({
        textAreaComentario:[''],
        textAreaComentario1:['']
         //esta la puse de pas para probar
      });
      }
 


   public enviarGestiondeltiempo(){

    this.softGestion.patch ('https://portfoliowalterrossi.herokuapp.com/mhardsoftgestiondeltiempo/1',
    {
      hardsoft_gestiondeltiempo: this.form.value.textAreaComentario,
    
        //ACA LE POMGO EL NOMBRE DEL CAMPO A MODIFICAR, COMO SE LLAME EN LA BASE DE DATOS
    }                                                //VOY FIJANDO EL REGISTRO, /mapellido/4
    //a url_img_persona  lo sacamos de mysql el campo donde se guarda el registro
    ).subscribe(Response=> console.log('Experiencia enviado!'));
  
  
  }



  Ir_a_home() {
    console.log("redirige a ir a home para seguir editando");
    this.route.navigateByUrl('/home');
     }





    }




 

 
  
  
  


  
