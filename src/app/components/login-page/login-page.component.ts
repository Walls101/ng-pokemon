import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { Player } from 'src/app/interfaces/players';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  hasNoAccount = false;
  players: Player[] = [];
  constructor(
    private fb: FormBuilder,
    private playersService: PlayersService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    this.players.forEach(player =>{
      this.playersService.registerPlayer(player)
    })
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;
  }
  register() {
    const username = this.loginForm.controls['username'].value
    const firstname = this.loginForm.controls['firstname'].value
    const lastname = this.loginForm.controls['lastname']
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value
  }
  noAccount() {
    this.hasNoAccount = true;
  }
  yesAccount() {
    this.hasNoAccount = false
  }
}