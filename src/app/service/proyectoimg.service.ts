import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProyectoimgService {
  URL= 'https://portfoliowalterrossi.herokuapp.com/mproyectoImg1/1';
  constructor(private http: HttpClient) { }

  public patch(URL:string, body:any){

    return this.http.patch(URL,body);
  }}




