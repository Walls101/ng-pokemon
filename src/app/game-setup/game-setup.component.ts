import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Player {
  val: string
}
@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.scss']
})
export class GameSetupComponent {
  players: Player[]= [
    {val: 'Player1'},
    {val: 'Player2'},
    {val: 'Player3'},
    {val: 'Plyaer4'}
  ]
action: any;
  constructor(
    private router: Router
  ){}
  playGame(){
    this.router.navigateByUrl('/game')
  }
}
