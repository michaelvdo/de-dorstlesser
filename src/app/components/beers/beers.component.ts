import { Component, OnInit } from '@angular/core';
import { BEERS } from '../../data/mock-beers';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers = BEERS;

  constructor() { }

  ngOnInit() {
  }

}
