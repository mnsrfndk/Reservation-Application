import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instrument, instruments } from '../../instruments/models/instruments';
import { Facility } from '../models/facilities';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor(private httpClient: HttpClient) {

  }

  public apiUrl: string = "http://localhost:5110/api/Facilities"

  searchFacilitiesByName(searchTerm: string): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(`http://localhost:5110/api/Facilities?q=${encodeURIComponent(searchTerm)}`);
  }

  getList(searchText: string) {
    return this.httpClient.get<Facility[]>(this.apiUrl, {
      params: { searchText }
    });
  }

  getById(id: number) {
    return this.httpClient.get<Facility>(`${this.apiUrl}/${id}`);
  }



}
