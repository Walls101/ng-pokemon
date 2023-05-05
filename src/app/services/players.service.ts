import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Player } from '../interfaces/players';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private db: AngularFirestore) { }

  registerPlayer(player: Player){
    this.db.collection('players').add(player)
  }

  
}
