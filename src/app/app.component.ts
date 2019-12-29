import { Component } from '@angular/core';
import { BEERS } from './data/mock-beers';
import { Beer } from './models/beer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'De Dorstlesser';
  beers: Beer[] = BEERS;
  filteredBeers: Beer[] = [];

  constructor() {
    this.filterBeers({Stijl: '', Brouwerij: ''});
  }

  filterBeers(filters: {Stijl: string, Brouwerij: string}) {
    this.filteredBeers = this.beers.filter((beer) => {
      const filtersArray = Object.keys(filters);
      return filtersArray.every((filter) => filters[filter] ? (beer[filter] === filters[filter]) : true);
      // return filters.Stijl ? beer.Stijl === filters.Stijl : true;
    });
  }
}
