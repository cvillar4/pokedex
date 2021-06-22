import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'poke-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailsComponent implements OnInit {

  pokemon$ = this.pokemonService.pokemonSelected$;

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const pokemonIdFromRoute = Number(routeParams.get('pokemonId'));

    this.pokemonService.emitPokemonId(pokemonIdFromRoute);

  }

  emitPreviousPokemon(pokemonId: number) {
    if (pokemonId > 1) {
      pokemonId -= 1;
      this.pokemonService.emitPokemonId(pokemonId);
    }
  }

  emitNextPokemon(pokemonId: number) {
    pokemonId += 1;
    this.pokemonService.emitPokemonId(pokemonId);
  }

}
