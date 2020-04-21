import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';
import { Product } from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products$ = this.store.select('products');
  title = 'my-app';
  newProduct: string;
  id = 1;
  selectedProduct: Product;

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

  delete(product: Product) {
    this.store.dispatch({
      type : 'REMOVE', payload: product
    });
  }

  select(product: Product) {
    this.selectedProduct = { ...product};
  }

  update() {
    this.store.dispatch({
      type : 'UPDATE', payload: this.selectedProduct
    });
    this.selectedProduct = null;
  }


}
