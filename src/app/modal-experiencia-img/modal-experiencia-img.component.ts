
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaimgService } from '../service/experienciaimg.service';

@Component({
  selector: 'app-modal-experiencia-img',
  templateUrl: './modal-experiencia-img.component.html',
  styleUrls: ['./modal-experiencia-img.component.css']
})


export class ModalExperienciaImgComponent implements OnInit {
  public form:any = FormGroup;
 
  constructor(private route:Router, private experiencia_img1: ExperienciaimgService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form= this.formBuilder.group({
      textAreaComentario:[''],
   
       //esta la puse de pas para probar
    });
    }


    public enviarExperienciaImg(){

      this.experiencia_img1.patch ('https://portfoliowalterrossi.herokuapp.com/mexperienciaImg1/1',
      {
        experienciaImg1: this.form.value.textAreaComentario,
      
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
  
  
  
  





