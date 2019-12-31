import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { FiltersComponent } from './components/filters/filters.component';

import { SortArrayService } from './services/sort-array.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerCardComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SortArrayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
