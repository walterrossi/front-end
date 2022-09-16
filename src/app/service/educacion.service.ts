import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL= 'https://portfoliowalterrossi.herokuapp.com/meducacion/1';  //https://portfoliowalterrossi.herokuapp.com   //'http://127.0.0.1:8080/meducacion/1'

  constructor(private http: HttpClient) { }
  public patch(URL:string, body:any){

    return this.http.patch(URL,body);
  }
  
}

