import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BEERS } from '../../data/mock-beers';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filterUpdated = new EventEmitter<{
    Stijl: string,
    Brouwerij: string
  }>();

  Stijl: string;
  Brouwerij: string;
  beers: Beer[] = BEERS;

  // Filters
  stijlOptions = [];
  brouwerijOptions = [];

  constructor() {
    this.generateFilters();
  }

  ngOnInit() {}

  generateFilters() {
    this.generateStijlOptions();
    this.generateBrouwerijOptions();
  }

  generateStijlOptions() {
    this.stijlOptions = this.beers.reduce((filterOptions, curr) => {
      if (!filterOptions.includes(curr.Stijl) && curr.Stijl !== '') {
        filterOptions.push(curr.Stijl);
      }
      return filterOptions;
    }, []);
  }

  generateBrouwerijOptions() {
    this.brouwerijOptions = this.beers.reduce((filterOptions, curr) => {
      if (!filterOptions.includes(curr.Brouwerij) && curr.Brouwerij !== '') {
        filterOptions.push(curr.Brouwerij);
      }
      return filterOptions;
    }, []);
  }

  filterChanged(event) {
    console.log(event.target.name);
    this[event.target.name] = event.target.value;
    this.filterUpdated.emit({
      Stijl: this.Stijl,
      Brouwerij: this.Brouwerij
    });
  }

}
