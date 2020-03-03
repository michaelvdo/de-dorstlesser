import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { SortArrayService } from '../../services/sort-array.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() beers: Beer[];
  @Output() filterUpdated = new EventEmitter<{
    Stijl: object,
    Brouwerij: object,
    Alcoholpercentage: object
  }>(true); // Added the "isAsync" flag as "true" to avoid an "Expression has changed after it was checked" error on values of the filters other than "" or "0". Ideally, the structure of the program should be rewritten to avoid this problem.
  // See https://stackoverflow.com/questions/42190290/expression-has-changed-after-it-was-checked-when-child-component-emits-on-ngon and https://hackernoon.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4

  // Initial values
  initialStijl: string = '';
  initialBrouwerij: string = '';
  initialAlcoholpercentage: string = '0';

  // Filter values
  Stijl: string = this.initialStijl;
  Brouwerij: string = this.initialBrouwerij;
  Alcoholpercentage: string = this.initialAlcoholpercentage;

  // Select element options
  selectOptions = {
    Stijl: [],
    Brouwerij: []
  }

  constructor(private sortArray: SortArrayService) {}

  ngOnInit() {
    this.generateOptions();
    this.emitFilterEvent();
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

  /**
   * Emit filter event. Used by parent to update beer list
   * @returns { undefined }
   */
  emitFilterEvent() {
    this.filterUpdated.emit({
      Stijl: {
        filterOn: 'stringValue',
        value: this.Stijl
      },
      Brouwerij: {
        filterOn: 'stringValue',
        value: this.Brouwerij
      },
      Alcoholpercentage: {
        filterOn: 'minimumNumber',
        value: this.Alcoholpercentage
      }
    });
  }

  /**
   * Update internal filter value and emit event
   * @param event { object } - Event raised by changed filter element
   * @returns { undefined }
   */
  filterChanged(event) {
    this[event.target.name] = event.target.value;
    // this.generateOptions(); // commented out since it's not working as expected...
    this.emitFilterEvent();
  }
}
