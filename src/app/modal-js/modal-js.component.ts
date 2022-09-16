import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HardjsService } from '../service/hardjs.service';


@Component({
  selector: 'app-modal-js',
  templateUrl: './modal-js.component.html',
  styleUrls: ['./modal-js.component.css']
})
export class ModalJsComponent implements OnInit {
  public form:any = FormGroup;
  constructor(private route:Router, private mhardsoftjs:HardjsService , private formBuilder: FormBuilder) { }

  

  ngOnInit(): void {

    this.form= this.formBuilder.group({
      textAreaComentario:['']
     
       //esta la puse de pas para probar
    });
    }


   public enviarJS(){

    this.mhardsoftjs.patch ('https://portfoliowalterrossi.herokuapp.com/mhardsoftjs/1',
    {
      hardsoft_js: this.form.value.textAreaComentario,
    
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




 

 
  
  
  


  
