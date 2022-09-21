import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokedex } from './pokedex/IPokedex';
import { IPokemonDetalle } from './pokedex/IPokemonDetalle';


@Injectable({
  providedIn: 'root'
})
export class PokemonapiService {
  private urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<IPokedex> {
    return this.http.get<IPokedex>(this.urlBase)
  }
  getDetallesPokemon(url: string): Observable<IPokemonDetalle> {
    return this.http.get<IPokemonDetalle>(url)
  }
    
}
