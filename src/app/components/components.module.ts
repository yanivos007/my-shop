import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [ProductsComponent, CartComponent ],
  declarations: [ProductsComponent, CartComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
