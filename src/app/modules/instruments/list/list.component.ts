import { Component, OnInit } from '@angular/core';
import { Facility } from '../../facilities/models/facilities';
import { Instrument } from '../models/instruments';
import { FacilitiesService } from '../../facilities/services/facilities.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[FacilitiesService]
})
export class ListComponent implements OnInit {

  instruments: Instrument[] = [];
  facilities: Facility[] = [];

  constructor(private service: FacilitiesService) {
   }

  ngOnInit(): void {
    this.showInstruments();
  }

  showInstruments() {
    this.service.getList('').subscribe(list => {
      this.facilities = list;
    });

  }

}
