import { Component, inject } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-service',
  imports: [JsonPipe],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  pokemon! : Pokemon;

  private _pokeService : PokemonService = inject(PokemonService)

  constructor() {

    this._pokeService.changerValeur("Salut")
    this.pokemon = this._pokeService.donneMoiPikachu()

  }

}
