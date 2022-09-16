import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardjsService {
  URL= 'https://portfoliowalterrossi.herokuapp.com/mhardsoftjs/1';
  constructor(private http: HttpClient) { }
  public patch(URL:string, body:any){

    return this.http.patch(URL,body);
  }
}





