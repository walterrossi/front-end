import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { getAuth, signOut,onAuthStateChanged, getIdTokenResult, IdTokenResult, AuthCredential} from "firebase/auth";
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
//import { Auth, idToken } from '@angular/fire/auth';
//import * as firebase from 'firebase/compat';
//import { async } from '@firebase/util';
//import { Token } from '@angular/compiler';
//import { getToken } from 'firebase/app-check';





@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent{
  
  usuario = {
    uid:'',
  email:'',
  password:''

///agregue esto///

///




 }
  constructor(private cookieService: CookieService, private user:UserService, private authService:AuthService, private router: Router) {

  }

  Ingresar(){ 

   


//// tenia desde aca///
    console.log(this.usuario); 
    const {email,password} = this.usuario; 

   

    this.authService.login(email,password).then(res=> {   
     
      console.log("Se logueo: ",res);
      
       
    
  
      
  

      console.log("El email: ",email);
      console.log("El password: ",password);
      //this.router.navigateByUrl('home');  //ojo que estaba portfolio 
     // this.router.navigate(['home']);

      console.log("Se logueo exitosamente ..");
      //console.log(this.user.Auth.app.options.apiKey);
      
      console.log(this.usuario.email);
      console.log(this.authService.isLoggedIn);
     
      
       //var accessToken = result.credential.accessToken;
      });
       
    //console.log(this.authService.afAuth.currentUser);
    //console.log(getIdTokenResult);
    // this.cokieService.set('token_access',res.accessToken,4, '/');
   
 
      

   
 }
 //habilitar hasta aca//
   
       

   
   
    
  

  Logout() {
  
  //---//
const auth = getAuth();
signOut(auth).then(() => {
 console.log("Saliendo.."); // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  ///-------///
  
  }

  IraPortfolio(){
    this.router.navigate(['/portfolio']);

  }
  



}




  

  
 







