import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facility } from '../../facilities/models/facilities';
import { Instrument } from '../models/instruments';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl: string = "http://localhost:5110/api/Facilities"

  // addInstrument(instrument: Instrument): Observable<Instrument> {
  //   return this.httpClient.post<Instrument>(this.apiUrl, instrument);
  // }

  getList() {
    return this.httpClient.get<Facility[]>(this.apiUrl);
  }

}
