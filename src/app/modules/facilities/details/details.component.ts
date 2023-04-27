import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facility } from '../models/facilities';
import { FacilitiesService } from '../services/facilities.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentId: number = 0;
  facility: Facility = {
    id: 0,
    name: '',
    description: "",
    imageUrl: "",
    isAvailable: true,
    instruments: []
  }

  constructor(private route: ActivatedRoute, private facilitiesService: FacilitiesService, private httpClient: HttpClient) {
    this.currentId = this.route.snapshot.params['facilityId'];
    this.facilitiesService.getById(this.currentId).subscribe(facility => {
      this.facility = facility;
      console.log(this.facility)
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }, 100);
  }

  toggleAvailability() {
    this.facility.isAvailable = !this.facility.isAvailable;
    this.updateAvailability(this.facility.isAvailable);
  }

  updateAvailability(isAvailable: boolean) {
    const url = `${this.facilitiesService.apiUrl}/${this.currentId}`;
    const updatedFacility: Facility = {
      id: this.facility.id,
      name: this.facility.name,
      description: this.facility.description,
      imageUrl: this.facility.imageUrl,
      isAvailable: isAvailable,
      instruments: this.facility.instruments
    };

    this.httpClient.put(url, updatedFacility).subscribe({
      next: () => {
        console.log('Availability updated successfully.');
      },
      error: error => {
        console.log(`Error updating availability: ${error.message}`);
      }
    });
  }


}
