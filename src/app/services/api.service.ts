import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(index: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
  }
  getImage(index: number): Observable<any> {
    return this.http.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`)
  }
}
/*
  forEachCard(1-180){
    call the api, passing in the number
    it returns the pokemon info
  }
  //going to component not service
  stick that data into an object
  call next index


*/