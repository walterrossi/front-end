import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {
  URL= 'https://portfoliowalterrossi.herokuapp.com/mUrl-img-persona/1';
  constructor(private http: HttpClient) { }


public patch(URL:string, body:any){

  return this.http.patch(URL,body);
}

}
