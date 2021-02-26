import { ProductsComponent } from './products/products/products.component';
import { NgModule } from '@angular/core';


@NgModule({
    exports: [ProductsComponent],
    declarations: [ProductsComponent],
})
export class ComponentsModule { }
