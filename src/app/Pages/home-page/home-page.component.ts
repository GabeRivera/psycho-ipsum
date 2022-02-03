import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../Services/store.service';
import {Observable} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  latestResult$: Observable<string>;
  constructor(
    private store: StoreService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.latestResult$ = this.store.getLatestResult().pipe(filter(term => !!term));
  }

  copyText(): void {
    this.latestResult$.pipe(take(1)).subscribe(text => navigator.clipboard.writeText(text));
    this._snackBar.open('Your text has been copied', 'close', { duration: 500});
  }
}
