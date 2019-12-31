import { Component, Input } from '@angular/core';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent {

  @Input('beerObj') beer: Beer;
  unknownMessage = 'Onbekend';

  constructor() {}
}
