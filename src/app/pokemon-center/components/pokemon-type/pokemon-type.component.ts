import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'poke-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonTypeComponent implements OnInit {

  @Input() pokemonType;
  typeClass: string;

  constructor() { }

  ngOnInit(): void {
    this.typeClass = this.pokemonType?.type?.name
  }

}
