import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { ModalEncabezadoComponent } from '../modal-encabezado/modal-encabezado.component';
import { encabezadoi } from '../model/encabezado-i';




@Injectable({
  providedIn: 'root'
})

export class PersonaService {
   URL= 'https://portfoliowalterrossi.herokuapp.com/';    ///'https://portfoliowr.herokuapp.com/';        // http://localhost:8080/
  constructor(private http : HttpClient) { }
 
  public getPersona(): Observable <persona>{

   return this.http.get<persona>(this.URL+'buscar/1');

 }




}
//hasta aca 



 ///--------------------////







