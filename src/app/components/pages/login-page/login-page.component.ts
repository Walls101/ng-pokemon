import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from 'src/app/interfaces/players';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, catchError, throwError } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
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
    this.router.navigateByUrl('/show-cards')
  }
  errorCallback(errorData) {
    console.log("Login Failed")
    this.router.navigateByUrl('/')
  }

  getPlayerObservable(id: string | null): Observable<Player> | undefined {
    return this.db.doc<Player>(`players/${id}`).valueChanges()
    .pipe(
      catchError(this.errorHandler)
    )
  }
  private errorHandler(error: unknown) {
    console.log(error)
    return throwError(error)
  }

   register(player: Player) {
    console.log(this.playerName)

    this.playersRef.add(player).then(() => console.log('success on add')).catch(error => console.log('add', error));
  }

}