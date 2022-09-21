import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../pokedex/IPokemon';
import { IPokemonDetalle } from '../pokedex/IPokemonDetalle';
import { PokemonapiService } from '../pokemonapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input () pokemon?: IPokemon
  pokemonDetalle?: IPokemonDetalle

  constructor(private pokemonApi: PokemonapiService) { }

  ngOnInit(): void {
    this.pokemonApi.getDetallesPokemon(this.pokemon?.url || '').subscribe(pokemon => this.pokemonDetalle = pokemon)
  }

}
