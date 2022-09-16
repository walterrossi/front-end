import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { SoftcomunicacionService } from '../service/softcomunicacion.service';


@Component({
  selector: 'app-modal-comunicacion',
  templateUrl: './modal-comunicacion.component.html',
  styleUrls: ['./modal-comunicacion.component.css']
})
export class ModalComunicacionComponent implements OnInit {
  public form:any = FormGroup;
  constructor(private route:Router, private hardsoft_comunicacion:SoftcomunicacionService , private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form= this.formBuilder.group({
      textAreaComentario:['']
     
       //esta la puse de pas para probar
    });
    }




    public enviarComunicacion(){

      this.hardsoft_comunicacion.patch ('https://portfoliowalterrossi.herokuapp.com/mhardsoftcomunicacion/1',
      {
        hardsoft_comunicacion: this.form.value.textAreaComentario,
      
          //ACA LE POMGO EL NOMBRE DEL CAMPO A MODIFICAR, COMO SE LLAME EN LA BASE DE DATOS
      }                                                //VOY FIJANDO EL REGISTRO, /mapellido/4
      //a url_img_persona  lo sacamos de mysql el campo donde se guarda el registro
      ).subscribe(Response=> console.log('Comunicacion enviado!'));
    
    
    }
  
  
  
    Ir_a_home() {
      console.log("redirige a ir a home para seguir editando");
      this.route.navigateByUrl('/home');
       }
  
  
  
  
  
      }
  
  





 


    
 

