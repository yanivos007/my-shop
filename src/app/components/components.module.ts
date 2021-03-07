import { ProductsComponent } from './products/products/products.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';


@NgModule({
    exports: [ProductsComponent],
    declarations: [ProductsComponent, LoginComponent],
})
export class ComponentsModule { }
