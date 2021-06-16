import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'poke-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.less']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon$ = this.pokemonService.pokemonSelected$.pipe(
    tap(console.log)
  );

  // pokemonChain$ = this.pokemonService.pokemonEvolutionChain$.pipe(
  //   tap(console.log)
  // );

  constructor(private pokemonService: PokemonService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const pokemonIdFromRoute = Number(routeParams.get('pokemonId'));
  
    this.pokemonService.emitPokemonId(pokemonIdFromRoute);

  }

}
