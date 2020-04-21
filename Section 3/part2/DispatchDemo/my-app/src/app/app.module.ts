import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms'



const productsReducer = (state = [], action) => {
  switch (action.type){
      case 'ADD' : 
          return [ ...state, { ...action.payload}];
      case 'REMOVE':
          return state.filter( p => p.id !== action.payload.id );
      case 'UPDATE':
          let product = state.find( p => p.id === action.payload.id );
            product = { ...product, ...action.payload};
            const products = state.filter( p => p.id === product.id );
          
          return [
            product, 
            ...products
          ];

      default : 
          return state;
  }
} 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      products : productsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
