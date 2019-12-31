import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortArrayService {

  constructor() {}

  sortStrings(arr: Array<string>) {
    arr.sort((a, b) => {
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      return 0;
    });
  }
}
