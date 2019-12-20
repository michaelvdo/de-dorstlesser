import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeersComponent } from './components/beers/beers.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent,
    BeerCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
