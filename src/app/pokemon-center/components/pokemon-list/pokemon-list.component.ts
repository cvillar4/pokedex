import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'poke-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent implements OnInit {


  pokemonList$ = this.pokemonService.pokemonList$.pipe(
    tap(pokemonList => console.log(pokemonList))
  );

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

}
