import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { ThemePalette } from '@angular/material/core';
// import {ProgressSpinnerMode} from '@angular/material/progress-spinner'

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})

export class Page4Component implements OnInit {
  constructor(private fbs: AngularFirestore){}

  getData(){
    return this.fbs
    .collection("collectionName")
    .snapshotChanges();
  }
  @Input() wonGames: number = 10;
  @Input() lostGames: number = 2;
  totalGames: number = 12;
  winRate: number = 10/12;
  loseRate: number = 2/12;


  @Input() value: number = 50;
  @Input() color: string = "primary"
  

  // color = 'primary';
  // mode = 'determinate';
  // number: 30;

  ngOnInit(): void {
    
  }
}
