import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { Facility } from '../modules/facilities/models/facilities';
import { SharedService } from '../shared/shared.service';
import { FacilitiesService } from '../modules/facilities/services/facilities.service';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  scrolledDown: boolean = false;
  inputValue: string = '';
  facilities: Facility[] = [];

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrolledDown = window.pageYOffset > 70;
  }
  constructor(private sharedService: SharedService, private service: FacilitiesService, private router: Router) { }

  sendData() {
    this.sharedService.setData(this.inputValue);
    this.showFacilities();
  }

  ngOnInit() {

  }

  showFacilities() {
    this.service.getList(this.inputValue).subscribe(list => {
      this.facilities = list;
    });
  }
  routeToDetails(id: number) {
    this.router.navigate(['/facilities/details', id]);
  }

}