import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonCenterModule } from './pokemon-center/pokemon-center.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PokemonCenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
