import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [ProductsComponent, StoreComponent, CartComponent ],
  declarations: [ProductsComponent, StoreComponent, CartComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
