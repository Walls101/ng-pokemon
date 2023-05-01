import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Player } from '../interfaces/players';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private db: AngularFirestore) { }
  registerPlayer(player: Player){
    this.db.collection('players').add(player)
  }
}
