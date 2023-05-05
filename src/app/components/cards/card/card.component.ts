import { Component, Input, OnInit } from '@angular/core';
import { GamepageComponent } from '../../pages/gamepage/gamepage.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {
  constructor() {}
  
  @Input() cards;
  @Input() index;





  ngOnInit() {
    
  }


}