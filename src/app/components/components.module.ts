import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
  exports: [ CartComponent ],
  declarations: [ CartComponent, CartItemComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
