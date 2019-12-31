import { Injectable } from '@angular/core';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class SanitizeBeersService {

  constructor() {}

  sanitize(beersArray: Array<Beer>) {
    beersArray.forEach((beer) => {
      beer.Alcoholpercentage
        .replace(/,/g, '.')
        .replace(/%/g, '')
    });
  }
}
