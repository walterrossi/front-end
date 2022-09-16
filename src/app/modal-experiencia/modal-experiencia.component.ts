import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})

export class ModalExperienciaComponent implements OnInit {
  
  public form:any = FormGroup;
 
  constructor(private route:Router, private experiencia: ExperienciaService, private formBuilder: FormBuilder) { 
  
  }
 
    ngOnInit(): void {

      this.form= this.formBuilder.group({
        textAreaComentario:[''],
        textAreaComentario1:['']
         //esta la puse de pas para probar
      });
      }
 


   public enviarExperiencia(){

    this.experiencia.patch ('https://portfoliowalterrossi.herokuapp.com/mexperiencia/1',
    {
      experiencia: this.form.value.textAreaComentario,
    
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




 

 
  
  
  


  
