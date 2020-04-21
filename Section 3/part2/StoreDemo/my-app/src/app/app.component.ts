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

  products$ = this.store.select('counter');
  title = 'my-app';
  newProduct: string;
  id = 1;

  constructor(
    private store: Store<AppState>
  ) {
    
    this.products$.subscribe(data => {
      console.log('data', data);
    });
  }

  ngOnInit() { }

  save() {

    this.store.dispatch({
      type: 'ADD', payload: {
        name: this.newProduct, id: this.id++
      }
    });

  }
}
