import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonCenterModule { }
