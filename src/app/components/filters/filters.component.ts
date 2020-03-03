import { Component, OnInit } from '@angular/core';

import { SortArrayService } from '../../services/sort-array.service';
import { BeersService } from 'src/app/services/beers.service';

import { Beer } from '../../models/beer.model';
import { Filters } from 'src/app/models/filters.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filters: Filters = {
    Stijl: {
      filterOn: 'stringValue',
      value: ''
    },
    Brouwerij: {
      filterOn: 'stringValue',
      value: ''
    },
    Alcoholpercentage: {
      filterOn: 'minimumNumber',
      value: '0'
    }
  };

  beers: Beer[] = this.beersService.getFilteredBeers(this.filters);

  // Select element options
  selectOptions = {
    Stijl: [],
    Brouwerij: []
  }

  constructor(private sortArray: SortArrayService, private beersService: BeersService) {}

  ngOnInit() {
    this.generateOptions();
  }

  /**
   * Generate options for select elements
   * @returns { undefined }
   */
  generateOptions() {
    for (const prop in this.selectOptions) {
      this.selectOptions[prop] = this.beers.reduce((filterOptions: Array<object>, curr) => {
        if (!filterOptions.includes(curr[prop]) && curr[prop] !== '') {
          filterOptions.push(curr[prop]);
        }
        return filterOptions;
      }, []);
      this.sortArray.sortStrings(this.selectOptions[prop]);
    }
  }

  filterChanged(event: any) {
    this.filters[event.target.name].value = event.target.value;
    this.beers = this.beersService.getFilteredBeers(this.filters);
  }
}
