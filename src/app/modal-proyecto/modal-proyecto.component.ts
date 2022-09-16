import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoService } from '../service/proyecto.service';



@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
  public form:any = FormGroup;
  constructor(private route:Router, private proyecto: ProyectoService, private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {

    this.form= this.formBuilder.group({
      textAreaComentario:['']
   
       //esta la puse de pas para probar
    });
    }


    public enviarProyecto(){

      this.proyecto.patch ('https://portfoliowalterrossi.herokuapp.com/mproyecto/1',
      {
        proyecto: this.form.value.textAreaComentario,
      
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








 








 

 
  
  
