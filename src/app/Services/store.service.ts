import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  latestResult$$: BehaviorSubject<string>;

  constructor() {
    this.latestResult$$ = new BehaviorSubject<string>(null);
  }

  getLatestResult(): Observable<string> {
    return this.latestResult$$.asObservable();
  }

  setLatestResult(result: string): void {
    this.latestResult$$.next(result);
  }
}
