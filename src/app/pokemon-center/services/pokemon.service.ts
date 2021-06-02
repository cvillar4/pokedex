import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonList$ = this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon');

  constructor(private httpClient: HttpClient) { }
}