import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { EducacionimgService } from '../service/educacionimg.service';


@Component({
  selector: 'app-modal-educacion-img',
  templateUrl: './modal-educacion-img.component.html',
  styleUrls: ['./modal-educacion-img.component.css']
})
export class ModalEducacionImgComponent implements OnInit {
  public form:any = FormGroup;
  constructor(private route:Router, private educacionImg1:EducacionimgService, private formBuilder: FormBuilder) { }

 





  ngOnInit(): void {

    this.form= this.formBuilder.group({
      textAreaComentario:['']
    });
    }
  
    public enviarEducacionImg(){

      this.educacionImg1.patch ('https://portfoliowalterrossi.herokuapp.com/meducacionImg1/1',
      {
        educacionImg1: this.form.value.textAreaComentario   //ACA LE POMGO EL NOMBRE DEL CAMPO A MODIFICAR, COMO SE LLAME EN LA BASE DE DATOS
      }                                                //VOY FIJANDO EL REGISTRO, /macerca/1
       //acerca, sale de lo que se graba en la table mysql
  
      ).subscribe(Response=> console.log('Educacion enviado!'));
    }
  
    
  
    Ir_a_home() {
      console.log("redirige a ir a home para seguir editando");
      this.route.navigateByUrl('/home');
       }
  
  
  
      }  
    




