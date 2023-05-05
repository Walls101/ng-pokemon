import { Component, OnInit } from '@angular/core';
import { GamepageComponent } from '../../pages/gamepage/gamepage.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})



export class CardComponent implements OnInit {
  cards = <any> []
  game_indexs = <number[]> []

  constructor(private game: GamepageComponent) {}



  ngOnInit() {
    this.game_indexs = this.game.shuffledArr
  }


}