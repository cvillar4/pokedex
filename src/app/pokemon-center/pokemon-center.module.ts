import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { RouterModule } from '@angular/router';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';
import { UnitConverterPipe } from './pipes/unit-converter.pipe';
import { PokemonNotFoundComponent } from './components/pokemon-not-found/pokemon-not-found.component';

@NgModule({
  declarations: [PokemonListComponent, PokemonCardComponent, PokemonDetailsComponent, PokemonTypeComponent, UnitConverterPipe, PokemonNotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    RouterModule
  ],
  exports: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    PokemonTypeComponent,
    PokemonNotFoundComponent
  ]
})
export class PokemonCenterModule { }
