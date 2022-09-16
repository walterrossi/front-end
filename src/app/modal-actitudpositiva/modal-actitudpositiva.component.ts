import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { SoftapositivaService } from '../service/softapositiva.service';


@Component({
  selector: 'app-modal-actitudpositiva',
  templateUrl: './modal-actitudpositiva.component.html',
  styleUrls: ['./modal-actitudpositiva.component.css']
})
export class ModalActitudpositivaComponent implements OnInit {
  public form:any = FormGroup;
  constructor(private route:Router, private hardsoftactitudpositiva:SoftapositivaService , private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form= this.formBuilder.group({
      textAreaComentario:['']
     
       //esta la puse de pas para probar
    });
    }


   public enviarActitudpositiva(){

   
      this.hardsoftactitudpositiva.patch ('https://portfoliowalterrossi.herokuapp.com/mhardsoftactitudpositiva/1',   //http://127.0.0.1:8080/mhardsoftactitudpositiva/1
      {
        hardsoft_actitudpositiva: this.form.value.textAreaComentario,
      
          //ACA LE POMGO EL NOMBRE DEL CAMPO A MODIFICAR, COMO SE LLAME EN LA BASE DE DATOS
      }                                                //VOY FIJANDO EL REGISTRO, /mapellido/4
      //a url_img_persona  lo sacamos de mysql el campo donde se guarda el registro
      ).subscribe(Response=> console.log('Actitud positiva se ha enviado!'));
    
    
    }
  
  
  
    Ir_a_home() {
      console.log("redirige a ir a home para seguir editando");
      this.route.navigateByUrl('/home');
       }
  
  
  
  
  
      }
  
  





 


    
 

