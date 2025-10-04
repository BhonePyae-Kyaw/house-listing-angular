import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
import { HousingService } from '../housing';
@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <form (ngSubmit)="onFilterSearch($event)">
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="onFilterSearch($event)">Search</button>
      </form>
    </section>
    <section class="results">
      @for(housingLocation of housingLocationList; track $index) {
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
      }
    </section>
  `,
  styleUrls: ['./home.css'],
})
export class Home {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocationInfo[] = [];
  housingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  onFilterSearch(event: Event) {
    event.preventDefault();
    // Add your filter logic here
    console.log('Filter search triggered');
  }
}
