import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {

  unknownMessage = 'Onbekend';
  beers = [
    {
      "id": 1,
      "Bier": "1410",
      "Stijl": "speciaalbier",
      "Stamwortgehalte": "13.0",
      "Alcoholpercentage": "5,5%",
      "Gisting": "hoog",
      "Sinds": 2010,
      "Brouwerij": "SNAB"
    },
    {
      "id": 2,
      "Bier": "Alfa Edel Pils",
      "Stijl": "pilsener",
      "Stamwortgehalte": "12.0",
      "Alcoholpercentage": "5,0%",
      "Gisting": "laag",
      "Sinds": null,
      "Brouwerij": "Alfa"
    },
    {
      "id": 3,
      "Bier": "Alfa Bokbier",
      "Stijl": "herfstbok",
      "Stamwortgehalte": "16.3",
      "Alcoholpercentage": "6,5%",
      "Gisting": "laag",
      "Sinds": 1981,
      "Brouwerij": "Alfa"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
