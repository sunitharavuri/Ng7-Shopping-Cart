import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

import { ProductService } from './services/product.service';

import { routing } from './app.routing';
import { ShoppingFilterComponent } from './components/shopping-filter/shopping-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    ShoppingFilterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
