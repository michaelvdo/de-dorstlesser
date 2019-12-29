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
    this.filterBeers({stijl: ''});
  }

  filterBeers(filters: {stijl: string}) {
    this.filteredBeers = this.beers.filter((beer) => {
      return filters.stijl ? beer.Stijl === filters.stijl : true;
    });
  }
}
