import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // NE PAS OUBLIER LE : provideHttpClient() DANS LE APP.CONFIG ⚡☣️
  private _httpClient : HttpClient = inject(HttpClient)

  getDitto() : Observable<Pokemon>{
    return this._httpClient.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/dittto")
  }
}
