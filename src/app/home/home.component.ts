import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { getAuth, signOut } from "firebase/auth";

import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home(): void {            //agregue estas lineas para que refrescara//
    window.location.reload(); //agregue estas lineas para que refrescara//
}   //agregue estas lineas para que refrescara//


  constructor(private authService:AuthService, private router: Router) {

  }


  ngOnInit(): void {
  }


  Logout() {
  
    //---//
  const auth = getAuth();
  signOut(auth).then(() => {
   console.log("Saliendo.."); 
   
   // Sign-out successful.
  
   this.router.navigate(['/portfolio']);
  
  }).catch((error) => {
    // An error happened.
  });
    ///-------///
    
    }
  }



