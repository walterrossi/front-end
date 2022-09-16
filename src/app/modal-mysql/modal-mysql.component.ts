import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HardmysqlService } from '../service/hardmysql.service';



@Component({
  selector: 'app-modal-mysql',
  templateUrl: './modal-mysql.component.html',
  styleUrls: ['./modal-mysql.component.css']
})
export class ModalMysqlComponent implements OnInit {
  public form:any = FormGroup;
  constructor(private route:Router, private mhardsoftmysql:HardmysqlService , private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    this.form= this.formBuilder.group({
      textAreaComentario:['']
     
       //esta la puse de pas para probar
    });
    }


   public enviarMYSQL(){

    this.mhardsoftmysql.patch ('https://portfoliowalterrossi.herokuapp.com/mhardsoftmysql/1',
    {
      hardsoft_mysql: this.form.value.textAreaComentario,
    
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




 

 
  
  
  


  
