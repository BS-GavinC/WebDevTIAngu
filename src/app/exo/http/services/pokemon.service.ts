import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pokemon } from '../../../demo/http/interfaces/pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() {
    this._baseUrl = "https://pokeapi.co/api/v2/"
  }

  private _baseUrl : string;

  private _httpClient : HttpClient = inject(HttpClient)

  getPokemonByNumber(nbr : number) : Observable<Pokemon>{
    return this._httpClient.get<Pokemon>(this._baseUrl + "pokemon/" + nbr)
  }


}
