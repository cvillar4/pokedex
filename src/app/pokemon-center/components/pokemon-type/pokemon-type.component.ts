import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'poke-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.less']
})
export class PokemonTypeComponent implements OnInit {

  @Input() pokemonType;
  typeClass: string;
  backgroundColorType: string;

  colors = Colors;

  constructor() { }

  ngOnInit(): void {
    this.typeClass = this.pokemonType?.type?.name
    this.backgroundColorType = `${this.colors}.${this.typeClass}`
  }

}

export enum Colors {
  bug = '#729f3f;',
  fairy = '#fdb9e9;',
  fire = '#fd7d24;',
  ghost = '#7b62a3;',
  normal = '#a4acaf;',
  phychic = '#f366b9;',
  steel = '#9eb7b8;',
  dark = '#707070;',
  elecric = '#eed535;',
  fighting = '#d56723;',
  grass = '#9bcc50;',
  ice = '#51c4e7;',
  poison = '#b97fc9;',
  rock = '#a38c21;',
  water = '#4592c4;',
  dragon = 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);',
  ground = 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);',
  flying = 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);'
}
