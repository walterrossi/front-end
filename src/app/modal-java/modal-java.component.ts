import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HardjavaService } from '../service/hardjava.service';

@Component({
  selector: 'app-modal-java',
  templateUrl: './modal-java.component.html',
  styleUrls: ['./modal-java.component.css']
})
export class ModalJavaComponent implements OnInit {
  public form:any = FormGroup;
  constructor(private route:Router, private hardsoft_java:HardjavaService , private formBuilder: FormBuilder) { }

 
  ngOnInit(): void {

    this.form= this.formBuilder.group({
      textAreaComentario:['']
     
       //esta la puse de pas para probar
    });
    }

   public enviarJava(){

    this.hardsoft_java.patch ('https://portfoliowalterrossi.herokuapp.com/mhardsoftjava/1',
    {
      hardsoft_java: this.form.value.textAreaComentario,
    
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




 

 
  
  
  


  
