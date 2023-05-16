import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GamepageComponent } from '../../pages/gamepage/gamepage.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  rotated = 'not';

  constructor() {}
  
  @Input() cards;
  @Input() num;

  @Output() place = new EventEmitter<number>();

  ngOnInit() {
    
  }

  emit(place){
    this.rotated = 'is'
    console.log('Card emitted. place: ', place)
    this.place.emit(place)
    setTimeout(this.back, 3000)
  }

  back(){
    this.rotated = 'not'
  }


}