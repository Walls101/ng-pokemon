import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../../cards/card/card.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.scss']
})
export class GamepageComponent implements OnInit{
    show_message = false;

    array20 = <number[]> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    grid_order_top = <number[]> [0, 1, 2, 3, 4, 5]
    grid_order_side = <any> ['A', 'B', 'C', 'D']
    cardsArr = <any[]> []
    shuffledArr = <any[]> []

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
        this.cardsArr.push({name: data?.forms[0].name, image: data?.sprites.front_default, index: rnum },) // types: {type1: data?.types[0].type?.name, type2: data?.types[1].type?.name}, //for some reason, adding the types in breaks everything. The console.log's show that they exist properly, but the errors say they are undefined.

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

    console.log('when ready shuffledArr: ', this.shuffledArr)
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


  //------------------------------

  @Input() place; // get the emitted place from the card

  guessArr = <any[]> []

  onEmit(place){
    console.log('gamepage got the emit. place: ', place)
    let index = place[0]
    let num = place[1]
    
    if(index != 2000){ //If it's not the replaced card. If it's not already matched.
      this.guessArr.push([index, num]) //stick the place into guessArr
    }

    console.log('guessArr: ', this.guessArr)

   if(this.guessArr.length == 2){
      if(this.guessArr[0][1] == this.guessArr[1][1]){ //check if they clicked the same card twice
        this.guessArr.pop() //take that same second card out of the array
      }
      else if(this.guessArr[0][0] == this.guessArr[1][0]){ //check if the cards are a match
        //stop rendering those cards, add a point to the correct player
        this.showMessage()
        this.shuffledArr.splice(this.guessArr[0][1], 1, {name: 'Invisible', image: 'assets/Images/CardGreenBack.png', index: 2000})
        this.shuffledArr.splice(this.guessArr[1][1], 1, {name: 'Invisible', image: 'assets/Images/CardGreenBack.png', index: 2000})
        this.guessArr = [] //clear the guesses
      }
      else{ //If the guessed cards aren't a match
        this.guessArr = [] //clear the guesses
      }
    }
    else if(this.guessArr.length >= 3){
      console.log('Error: guessArr has too many values')
    }
    else{
      // nothing really
    }

  }

  //--------------
  showMessage(){
    console.log('showing message before true: ', this.show_message)
    this.show_message = true;
    console.log('showing message after true: ', this.show_message)
    setTimeout(this.hideMessage, 1000);
  };
  
  hideMessage(){
    console.log('hiding message')
    console.log('show_message before set to false: ', this.show_message)
    this.show_message = false;
    console.log('show_message after set to false: ', this.show_message)
  }

}

