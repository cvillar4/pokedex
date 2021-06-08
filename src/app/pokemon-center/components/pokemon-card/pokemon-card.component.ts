import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'poke-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.less']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon;

  constructor() { }

  ngOnInit(): void {}

}
