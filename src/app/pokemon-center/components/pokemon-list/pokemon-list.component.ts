import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'poke-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {

  itemsPerPage = 30;
  totalItems = 150;
  pokemonList$ = this.pokemonService.pokemonList$;

  constructor(private pokemonService: PokemonService) { }
 
  ngOnInit(): void {}
 
  pageChanged(event: PageChangedEvent): void {
    this.pokemonService.emitPage(+event.page);
  }

}
