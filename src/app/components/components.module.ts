import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [ProductsComponent, StoreComponent],
  declarations: [ProductsComponent, StoreComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
