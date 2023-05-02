import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Auth, signInWithEmailAndPassword} from '@angular/fire/auth'
import * as firebase from 'firebase/compat';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // constructor(private auth: Auth) { }

  // login(username: string, password: string){
  //   return from(signInWithEmailAndPassword(this.auth, username, password))
  // }
  // logout(){
  //   return from(this.auth.signOut())
  // }
  login(username: string, password: string){
    firebase.auth()
  }
}
