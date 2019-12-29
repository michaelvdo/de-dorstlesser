import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {

  @Input('beerObj') beer: Beer;
  @Input('beerIndex') index: number;
  unknownMessage = 'Onbekend';

  constructor() { }

  ngOnInit() {
  }

}
