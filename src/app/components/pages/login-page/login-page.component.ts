import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/interfaces/players';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, catchError, throwError } from 'rxjs';
import { PlayersService } from 'src/app/services/players.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  saved = false
  loggedIn = true;
  loginForm: FormGroup;
  hasNoAccount = false;
  players: Player[] = [];
  playerRef: AngularFirestoreDocument<Player>
  playersRef: AngularFirestoreCollection<Player>
  player: Player;
  playerName: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFirestore,

  ) {
    this.playerRef = this.db.doc<Player>('players/233RDDDu0v45yX3C4ztI')
    this.playersRef = this.db.collection<Player>('players')
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', Validators.required],
   
  }

  successCallback(signInSuccessData){
    console.log('Signed in successfully');
    this.loggedIn = true
  }
  errorCallback(errorData) {
    console.log("Login Failed")

  }
  savePlayer(player: Player){
    this.playersRef.add(player)
    this.saved = true;
  }
  isShown(event){
    this.loggedIn = false
  }



   register(player: Player) {
    console.log(this.playerName)

    this.playersRef.add(player).then(() => console.log('success on add')).catch(error => console.log('add', error));
  }

}