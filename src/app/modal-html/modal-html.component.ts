import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Form, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HardhtmlService } from '../service/hardhtml.service';


@Component({
  selector: 'app-modal-html',
  templateUrl: './modal-html.component.html',
  styleUrls: ['./modal-html.component.css']
})
export class ModalHtmlComponent implements OnInit {
  public form:any = FormGroup;
  constructor(private route:Router, private hardsoft_html:HardhtmlService , private formBuilder: FormBuilder) { }

 


    ngOnInit(): void {

      this.form= this.formBuilder.group({
        textAreaComentario:['']
       
         //esta la puse de pas para probar
      });
      }
 


   public enviarHtml(){

    this.hardsoft_html.patch ('https://portfoliowalterrossi.herokuapp.com/mhardsofthtml/1',
    {
      hardsoft_html: this.form.value.textAreaComentario,
    
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




 

 
  
  
  


  
