import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonListComponent, PokemonCardComponent, PokemonDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot([
      { path: 'pokemon', component: PokemonListComponent },
      { path: 'pokemon/:pokemonId', component: PokemonDetailsComponent },
      {path: '', redirectTo: '/pokemon', pathMatch: 'full'},
    ])
  ],
  exports: [
    PokemonListComponent,
    PokemonCardComponent, 
    PokemonDetailsComponent
  ]
})
export class PokemonCenterModule { }
