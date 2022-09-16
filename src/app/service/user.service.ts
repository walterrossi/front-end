import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth) { }

login ({email, password }:any ){
  return signInWithEmailAndPassword(this.auth,email,password);
}

logout(){
  return signOut(this.auth); 
}

}
