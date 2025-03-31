import { Component, inject } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../../../demo/http/interfaces/pokemon.interface';

@Component({
  selector: 'app-main-http',
  imports: [FormsModule],
  templateUrl: './main-http.component.html',
  styleUrl: './main-http.component.css'
})
export class MainHttpComponent {

  private _pokeService : PokemonService = inject(PokemonService)

  selectedNumber : number = 1

  pokemon : Pokemon | undefined

  errorMessage : string | undefined

  search(){

    this.errorMessage = undefined
    this.pokemon = undefined

    this._pokeService.getPokemonByNumber(this.selectedNumber).subscribe({
      next : (poke) => {
        this.pokemon = poke
      },

      error : (err) => {
        this.errorMessage = err.error
      }
    })
  }

}
