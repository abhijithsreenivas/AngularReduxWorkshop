import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';
import { Observable } from 'rxjs';
import { Product } from './product';

const createProduct = (id, title) => ({
  type : 'ADD',
  payload : { id,title}

});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  products$: Observable<Product[]>;
  id=1;
  newProduct: string;


  constructor(private store: Store<AppState>){
     this.products$  = this.store.select( state => state.products);
  }

  create(){
    this.store.dispatch(createProduct(this.id++, this.newProduct));
  }
}
