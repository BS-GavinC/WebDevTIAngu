import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private valeur : string = "Bonjour"

  constructor()
  {
    console.log(this.valeur);

  }

  changerValeur(value : string){
    this.valeur = value
    console.log(this.valeur);

  }

  donneMoiPikachu() : Pokemon{
    return {
      id : 25,
      name : 'Pikachuuuu'
    }
  }

  donneMoiRaichu() : Pokemon{
    return {
      id : 26,
      name : 'Raiiiichuuuu'
    }
  }
}
