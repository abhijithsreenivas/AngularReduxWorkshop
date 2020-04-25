import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

const productReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD' : 
          return [ ...state, {...action.payload}];
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
      products: productReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
