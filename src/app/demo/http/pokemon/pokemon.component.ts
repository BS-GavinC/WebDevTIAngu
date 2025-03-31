import { Component, inject, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  poke! : Pokemon;

  errorMessage : string = ""

  private _pokeService : PokemonService = inject(PokemonService)

  ngOnInit(): void {

    this._pokeService.getDitto().subscribe({
      next : (ditto) =>{
        this.poke = ditto
      },

      error : (err) => {
        this.errorMessage = err.error
      }
    })

  }

}
