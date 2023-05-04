import { Component } from '@angular/core';
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
}
