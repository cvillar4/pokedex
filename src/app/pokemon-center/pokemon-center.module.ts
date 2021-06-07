import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [PokemonListComponent, PokemonCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PaginationModule.forRoot()
  ],
  exports: [
    PokemonListComponent,
    PokemonCardComponent
  ]
})
export class PokemonCenterModule { }
