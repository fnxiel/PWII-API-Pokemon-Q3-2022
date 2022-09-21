import { Component, OnInit } from '@angular/core';
import { PokemonapiService } from '../pokemonapi.service';
import { IPokedex } from './IPokedex';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokedex?: IPokedex
  constructor(private pokemonApi: PokemonapiService) { }

  ngOnInit(): void {
    this.pokemonApi.getPokemons().subscribe(pokedex => this.pokedex = pokedex)
  }

}
