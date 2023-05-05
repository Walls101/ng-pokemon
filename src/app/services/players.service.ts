import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Player } from '../interfaces/players';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private playersRef: AngularFirestoreCollection<Player>
  private playerRef: AngularFirestoreDocument<Player>
  constructor(
    private db: AngularFirestore,
    ) { 
      this.playerRef = this.db.doc<Player>('players/233RDDDu0v45yX3C4ztI')
      this.playersRef = this.db.collection<Player>('players')
    }
  
  // registerPlayer(player: Player){
  //   this.db.collection('players').add(player)
  // }
  // getPlayersObservable(): Observable<Player[]> {
  //   return this.playersRef.snapshotChanges()
  //   .pipe(
  //     map((items: DocumentChangeAction<Player>[]): Player[]=> {
  //       return items.map((item: DocumentChangeAction<Player>): Player =>{

  //       })
  //     })
  //   )
  // }
  
}


