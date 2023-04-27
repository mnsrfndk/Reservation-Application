import { Component, Input, OnInit} from '@angular/core';
import { Instrument } from '../../instruments/models/instruments';
import { Facility } from '../models/facilities';
import { FacilitiesService } from '../services/facilities.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [FacilitiesService]
})
export class ListComponent implements OnInit {
  @Input() searchText: string = '';
  facilities: Facility[] = [];

  constructor(private service: FacilitiesService, private sharedService: SharedService) {
    this.sharedService.sharedData.subscribe(data => {
      this.searchText = data;
    });
  }



  ngOnInit() {
    this.sharedService.sharedData.subscribe((searchText: string) => {
      this.searchText = searchText;
      this.showFacilities();
    });
  }
  showFacilities() {
    this.service.getList(this.searchText).subscribe(list => {
      this.facilities = list;
    });
  }
}
