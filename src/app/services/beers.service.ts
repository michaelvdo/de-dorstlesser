import { Injectable } from '@angular/core';

import { SanitizeBeersService } from './sanitize-beers.service';
import { config } from '../../../firebase.config';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  firebaseConfig = config;
  // beers: Beer[] = this.fetchBeersFromDatabase();

  constructor(private sanitizeBeers: SanitizeBeersService) {
    // this.fetchBeersFromDatabase().then(beers => this.beers = beers);
  }

  // getBeers(): Beer[] {
  //   return this.beers;
  // }

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
