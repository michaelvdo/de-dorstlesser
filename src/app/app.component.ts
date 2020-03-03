import { Component } from '@angular/core';
import { Beer } from './models/beer.model';
import { BeersService } from './services/beers.service';
import { Filters } from './models/filters.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'De Dorstlesser';
  // beers: Beer[] = this.beersService.getBeers();
  // filteredBeers: Beer[] = this.beersService.getBeers();

  constructor(private beersService: BeersService) { }

  /**
   * Filter visible beers list
   * @param filters { object } - Object with the filter types
   * @returns { undefined }
   */
  // filterBeers(beers: Beer[], filters: Filters) {
  //   this.filteredBeers = this.beers.filter((beer) => {
  //     const filtersArray = Object.keys(filters);
  //     return filtersArray.every((filter) => {
  //       const filterOn = filters[filter].filterOn;
  //       const filterValue = filters[filter].value;
  //       // Filter on string value
  //       if (filterOn === 'stringValue') {
  //         return filterValue ? (beer[filter] === filterValue) : true;
  //       }
  //       // Filter on minimum number
  //       if (filterOn === 'minimumNumber') {
  //         return filterValue && parseFloat(beer[filter]) >= parseFloat(filterValue);
  //       }
  //     });
  //   });
  // }
}
