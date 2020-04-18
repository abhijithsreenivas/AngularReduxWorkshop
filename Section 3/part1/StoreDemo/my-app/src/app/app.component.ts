import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  counter$ : Observable<number>;
  title = 'my-app';

  constructor(
    private store: Store<AppState>
  ) {
    this.counter$ = store.select('counter');
  }

  ngOnInit() {}
}
