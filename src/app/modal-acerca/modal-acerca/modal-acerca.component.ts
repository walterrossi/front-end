import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AcercaService } from 'src/app/service/acerca.service';

@Component({
  selector: 'app-modal-acerca',
  templateUrl: './modal-acerca.component.html',
  styleUrls: ['./modal-acerca.component.css']
})

export class ModalAcercaComponent implements OnInit {


  public form:any = FormGroup;
 
  constructor(private route:Router, private acerca: AcercaService, private formBuilder: FormBuilder) { 
  
      
  }

  
      
  
  

  


 ngOnInit(): void {

  this.form= this.formBuilder.group({
    textAreaComentario:['']
  });
  }

 

  public enviarAcerca(){

    this.acerca.patch ('https://portfoliowalterrossi.herokuapp.com/macerca/1', //127.0.0.1:8080/mcerca/1..
    {
      acerca: this.form.value.textAreaComentario   //ACA LE POMGO EL NOMBRE DEL CAMPO A MODIFICAR, COMO SE LLAME EN LA BASE DE DATOS
    }                                                //VOY FIJANDO EL REGISTRO, /macerca/1
     //acerca, sale de lo que se graba en la table mysql

    ).subscribe(Response=> console.log('Acerca enviado!'));
  }

  

  Ir_a_home() {
    console.log("redirige a ir a home para seguir editando");
    this.route.navigateByUrl('/home');
     }





    }






