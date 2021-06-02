import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../models/pokemon-list';
import { mergeMap, map, tap, concatMap, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonApiURL = 'https://pokeapi.co/api/v2/';
  private pokemonListURL = 'pokemon';

  pokemonList$ = this.httpClient.get<PokemonList>(this.pokemonApiURL + this.pokemonListURL).pipe(
    map((pokemonList) => pokemonList.results),
    switchMap((pokemonList) => forkJoin(this.generatePokemonURLs(pokemonList)))
  );

  constructor(private httpClient: HttpClient) { }

  generatePokemonURLs(pokemonList) {
    const pokemonURLs$ = [];
    pokemonList.forEach((pokemon) => {
      pokemonURLs$.push(this.httpClient.get(pokemon.url));
    });

    return pokemonURLs$;
  }
}