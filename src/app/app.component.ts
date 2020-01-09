import { Component } from '@angular/core';
import { BEERS } from './data/mock-beers';
import { Beer } from './models/beer.model';
import { SanitizeBeersService } from './services/sanitize-beers.service';
import * as firebase from 'firebase/app';
import 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'De Dorstlesser';
  beers: Beer[] = BEERS;
  filteredBeers: Beer[] = BEERS;

  firebaseConfig = {
    apiKey: "AIzaSyCzwqdG-qCI9JEpjiTyzf7EQqr5Hs7SdcE",
    authDomain: "de-dorstlesser.firebaseapp.com",
    databaseURL: "https://de-dorstlesser.firebaseio.com",
    projectId: "de-dorstlesser",
    storageBucket: "de-dorstlesser.appspot.com",
    messagingSenderId: "510738052599",
    appId: "1:510738052599:web:ac05a2a1d0c3cdcd552af2"
  }

  database;

  constructor(private sanitizeBeers: SanitizeBeersService) {
    this.sanitizeBeers.sanitize(this.beers);

    firebase.initializeApp(this.firebaseConfig);

    this.database = firebase.database();

    this.database.ref('Beers/').once('value', (snap) => {
      console.log(snap.val());
    });
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
