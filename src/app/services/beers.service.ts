import { Injectable } from '@angular/core';

import { SanitizeBeersService } from './sanitize-beers.service';
import { config } from '../../../firebase.config';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Beer } from '../models/beer.model';
import { BEERS } from '../data/mock-beers';
import { Filters } from '../models/filters.model';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  firebaseConfig = config;
  beers: Beer[] = BEERS;

  constructor(private sanitizeBeers: SanitizeBeersService) {
    this.sanitizeBeers.sanitize(this.beers);
  }

  getBeers(): Beer[] {
    return this.beers;
  }

  getFilteredBeers(filters: Filters): Beer[] {
    return this.filterBeers(this.beers.slice(), filters);
  }

  filterBeers(beers: Beer[], filters: Filters): Beer[] {
    return beers.filter((beer) => {
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

  async fetchBeersFromDatabase(): Promise<any> {
    let beers: Beer[];

    await firebase
      .initializeApp(this.firebaseConfig)
      .database()
      .ref('Beers/')
      .once('value', (snap) => beers = snap.val());

    return beers;
  }
}
