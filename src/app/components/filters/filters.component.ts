import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filterUpdated = new EventEmitter<{
    stijl: string
  }>();

  stijl: string;

  constructor() { }

  ngOnInit() {
  }

  filterChanged(event) {
    console.log(event);
    this.filterUpdated.emit({
      stijl: event.target.value
    });
  }

}
