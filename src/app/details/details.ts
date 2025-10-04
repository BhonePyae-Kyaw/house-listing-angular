import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing';
import { HousingLocationInfo } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation = signal<HousingLocationInfo | undefined>(undefined);

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation.set(this.housingService.getHousingLocationById(housingLocationId));
  }

  submitApplication() {
    console.log('Form submitted!', this.applyForm.value);
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    this.applyForm.reset();
  }
}
