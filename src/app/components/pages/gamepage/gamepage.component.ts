import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../cards/card/card.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.scss']
})
export class GamepageComponent implements OnInit{
    samples = <number[]> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    grid_order_top = <number[]> [0, 1, 2, 3, 4, 5]
    grid_order_side = <any> ['A', 'B', 'C', 'D']
    cardsArr = <any[]> []
    shuffledArr = <number[]> []

    array10 = <number[]> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    randnums = <number[]> []

    max = 1;


    constructor(private apiservice: ApiService) {}
    
    
  ngOnInit(): void {
    this.max = 1015;
    this.array10.forEach(element => {
      let rnum = this.randnum(this.max) //Gets a random number between 0 and max
      this.checkRandnums(rnum, element); //Check to make sure it doesn't already exist
    })
 
    //randnums = [1, 5, 345, 1015, 342, 985, etc]

    this.randnums.forEach(rnum => {
      this.apiservice.getData(rnum).subscribe((data) => {//Get that card from the api
        //pass that card to the array
        this.cardsArr.push({name: data?.forms[0].name, image: data?.sprites.front_default, index: rnum },)

        if(this.cardsArr.length == 10){
          this.whenCardsReady()
        }
      });
    })
    
    

  }

  whenCardsReady(){
    //cardsArr = [{card1}, {card5}, {card345}, etc]

    this.cardsArr.forEach(card => {
      this.cardsArr.push(card)
    }); //each card is now in the array twice

    //cardsArr = [{card1}, {card5}, {card345}, etc, {card1}, {card5}, {card345}, etc]

    this.max = 20;
    this.cardsArr.forEach(card => {
      let ridx = this.randnum(this.max) //Gets a random (index) number between 0 and max
      this.checkRandindx(ridx, card) //Checks if that index already has a card, makes shuffledArr
    });

    console.log('shuffledArr: ', this.shuffledArr)
  }

  

  checkRandnums(rnum, element){
    if(this.randnums.includes(rnum)){ //checks to see if that number already exists
      rnum = this.randnum(this.max) //if it does, make a new one
      this.checkRandnums(rnum, element) //check it again
    }
    else{
      this.randnums[element] = rnum //if it does not, push it to the array
    }
  }

  checkRandindx(randIndex, card){
    if(this.shuffledArr[randIndex] != undefined){ //if that index in shuffledArr already has a card
      let randIndex = this.randnum(this.max) //get a new random index
      this.checkRandindx(randIndex, card) // check again
    }
    else{
      this.shuffledArr[randIndex] = card; //otherwise, place that card into that random index of shuffledArr
    }
  }

  randnum(max){
    return Math.floor((Math.random() * max) + 0)
  }

}