import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EducacionService } from '../service/educacion.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})

export class ModalEducacionComponent implements OnInit {
  public form:any = FormGroup;
 
  constructor(private route:Router, private educacion:EducacionService, private formBuilder: FormBuilder) { }

 

  ngOnInit(): void {

    this.form= this.formBuilder.group({
      textAreaComentario:['']
    });
    }
  
    public enviarEducacion(){

      this.educacion.patch ('https://portfoliowalterrossi.herokuapp.com/meducacion/1',
      {
        educacion: this.form.value.textAreaComentario   //ACA LE POMGO EL NOMBRE DEL CAMPO A MODIFICAR, COMO SE LLAME EN LA BASE DE DATOS
      }                                                //VOY FIJANDO EL REGISTRO, /macerca/1
       //acerca, sale de lo que se graba en la table mysql
  
      ).subscribe(Response=> console.log('Educacion enviado!'));
    }
  
    
  
    Ir_a_home() {
      console.log("redirige a ir a home para seguir editando");
      this.route.navigateByUrl('/home');
       }
  
  
  
      }  
    


