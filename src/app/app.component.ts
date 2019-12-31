import { Component } from '@angular/core';
import { BEERS } from './data/mock-beers';
import { Beer } from './models/beer.model';
import { SanitizeBeersService } from './services/sanitize-beers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'De Dorstlesser';
  beers: Beer[] = BEERS;
  filteredBeers: Beer[] = BEERS;

  constructor(private sanitizeBeers: SanitizeBeersService) {
    this.sanitizeBeers.sanitize(this.beers);
  }

  /**
   * Filter visible beers list
   * @param filters { object } - Object with the filter types
   * @returns { undefined }
   */
  filterBeers(filters: {Stijl: object, Brouwerij: object, Alcoholpercentage: object}) {
    this.filteredBeers = this.beers.filter((beer) => {
      const filtersArray = Object.keys(filters);
      return filtersArray.every((filter) => {
        const filterOn = filters[filter].filterOn;
        const filterValue = filters[filter].value;
        // Filter on string value
        if (filterOn === 'stringValue') {
          return filterValue ? (beer[filter] === filterValue) : true;
        }
        // Filter on minimum number
        if (filterOn === 'minimumNumber') {
          return filterValue && parseFloat(beer[filter]) >= parseFloat(filterValue);
        }
      });
    });
  }
}
