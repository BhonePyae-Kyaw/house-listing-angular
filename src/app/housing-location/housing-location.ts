import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HousingLocationInfo } from '../housinglocation';
@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
