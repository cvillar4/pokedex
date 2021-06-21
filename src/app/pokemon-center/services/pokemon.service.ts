import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../models/pokemon-list';
import { concatMap, map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonApiURL = 'https://pokeapi.co/api/v2/';
  private pokemonListURL = 'pokemon';

  private pokemonPageBehaviorSubject = new BehaviorSubject<number>(0);
  pokemonPageAction$ = this.pokemonPageBehaviorSubject.asObservable();

  private pokemonIdSubject = new BehaviorSubject<number>(0);
  pokemonIdAction$ = this.pokemonIdSubject.asObservable();

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

  pokemonSelected$ = this.pokemonIdAction$.pipe(
    concatMap(pokemonId => this.httpClient.get(`${this.pokemonApiURL}${this.pokemonListURL}/${pokemonId}`)),
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

  emitPokemonId(pokemonId: number): void {
    this.pokemonIdSubject.next(pokemonId);
  }

}