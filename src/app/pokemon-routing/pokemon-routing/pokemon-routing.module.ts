import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonListComponent } from 'src/app/pokemon-center/components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from 'src/app/pokemon-center/components/pokemon-details/pokemon-details.component';
import { PokemonCenterModule } from 'src/app/pokemon-center/pokemon-center.module';
import { PokemonNotFoundComponent } from 'src/app/pokemon-center/components/pokemon-not-found/pokemon-not-found.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonCenterModule,
    RouterModule.forRoot([
      { path: 'pokemon', component: PokemonListComponent },
      { path: 'pokemon/:pokemonId', component: PokemonDetailsComponent },
      { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
      { path: '**', component: PokemonNotFoundComponent }
    ])
  ]
})
export class PokemonRoutingModule { }
