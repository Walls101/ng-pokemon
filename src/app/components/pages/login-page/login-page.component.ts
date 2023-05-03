import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from 'src/app/interfaces/players';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../services/authentication.service'
import { HotToastService } from '@ngneat/hot-toast'
import { AngularFireModule } from '@angular/fire/compat';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  hasNoAccount = false;
  players: Player[] = [];
  player$: Observable<Player>
  constructor(
    private authService: AuthenticationService,
    private db: AngularFirestore,
    private fb: FormBuilder,
    private playersService: PlayersService,
    private router: Router,
    private toast: HotToastService
  ) {
    this.player$ = this.db.doc<Player>('players/233RDDDu0v45yX3C4ztI').valueChanges()
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log(this.player$)
    this.players.forEach(player =>{
      this.playersService.registerPlayer(player)
    })
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;
  }
  register() {
    const username = this.loginForm.controls['username'].value
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value
    this.db.collection('players').add({
      field: username, email, password
    }).then(() => console.log('Success on add'))
    .catch(error => console.log('add', error))

  }
  noAccount() {
    this.hasNoAccount = true;
  }
  yesAccount() {
    this.hasNoAccount = false
  }
  submit(){
    if(!this.loginForm.valid){
      return;
    }
    const { email, password } = this.loginForm.value
    this.authService.login(email, password)
    //.pipe(this.toast.observe({
    //   success: 'Logged in successfully',
    //   loading: 'Logging in...',
    //   error: 'There was an error'
    // })).subscribe(()=>{
    //   this.router.navigate(['/show-cards'])
    // })
  }
}