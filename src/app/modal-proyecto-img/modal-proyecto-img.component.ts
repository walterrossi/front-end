import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoimgService } from '../service/proyectoimg.service';



@Component({
  selector: 'app-modal-proyecto-img',
  templateUrl: './modal-proyecto-img.component.html',
  styleUrls: ['./modal-proyecto-img.component.css']
})
export class ModalProyectoImgComponent implements OnInit {
  public form:any = FormGroup;
  constructor(private route:Router, private proyectoImg1: ProyectoimgService, private formBuilder: FormBuilder) { }

  
  
  ngOnInit(): void {

    this.form= this.formBuilder.group({
      textAreaComentario:['']
   
       //esta la puse de pas para probar
    });
    }


    public enviarProyectoImg(){

      this.proyectoImg1.patch ('https://portfoliowalterrossi.herokuapp.com/mproyectoImg1/1',
      {
        proyectoImg1: this.form.value.textAreaComentario,
      
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








 








 

 
  
  




