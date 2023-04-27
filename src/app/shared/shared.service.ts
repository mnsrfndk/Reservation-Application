import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
private inputData = new BehaviorSubject<string>('');
sharedData = this.inputData.asObservable();
  constructor() { }

  setData(value: string) {
    this.inputData.next(value);
  }
}
