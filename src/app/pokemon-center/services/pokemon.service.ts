import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonList } from '../models/pokemon-list';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonApiURL = 'https://pokeapi.co/api/v2/';
  private pokemonListURL = 'pokemon';

  private pokemonPageBehaviorSubject = new BehaviorSubject<number>(0);
  pokemonPageAction$ = this.pokemonPageBehaviorSubject.asObservable();

  pokemonList$ = this.pokemonPageAction$.pipe(
    concatMap(pageNumber => this.httpClient.get<PokemonList>(this.pokemonApiURL + this.pokemonListURL,
      {
        params: {
          offset: (pageNumber * 30).toString(),
          limit: '30'
        }
      })
    ),
    map(pokemonList => pokemonList.results),
    switchMap(pokemonList => forkJoin(this.generatePokemonURLs(pokemonList))),
  );

  constructor(private httpClient: HttpClient) { }

  generatePokemonURLs(pokemonList) {
    const pokemonURLs$ = [];
    pokemonList.forEach((pokemon) => {
      pokemonURLs$.push(this.httpClient.get(pokemon.url));
    });

    return pokemonURLs$;
  }

  emitPage(pageNumber: number): void {
    this.pokemonPageBehaviorSubject.next(pageNumber - 1);
  }

}