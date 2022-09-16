//import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
//import { idToken } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { getToken } from 'firebase/app-check';
//import * as firebase from 'firebase/compat';
import { Observable, Subscriber } from 'rxjs';


//const token= localStorage.getItem('user');//estsa la puse de mas

//get isLoggedIn(): boolean {
  const token= JSON.parse(localStorage.getItem('user')!);
 // return user !== 'null' ? true : false;
//} 



console.log('El token es: ',token);
@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (token){
    
    return true;
  }
    else {
    
      return false;
    }
  }
  
}
