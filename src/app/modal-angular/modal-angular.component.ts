import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HardangularService } from '../service/hardangular.service';


@Component({
  selector: 'app-modal-angular',
  templateUrl: './modal-angular.component.html',
  styleUrls: ['./modal-angular.component.css']
})
export class ModalAngularComponent implements OnInit {
  public form:any = FormGroup;
  constructor(private route:Router, private hardsoftangular:HardangularService , private formBuilder: FormBuilder) { }

 
    ngOnInit(): void {

      this.form= this.formBuilder.group({
        textAreaComentario:['']
       
         //esta la puse de pas para probar
      });
      }
 


   public enviarAngular(){

    this.hardsoftangular.patch ('https://portfoliowalterrossi.herokuapp.com/mhardsoftangular/1',
    {
      hardsoft_angular: this.form.value.textAreaComentario,
    
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


