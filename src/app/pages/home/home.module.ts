import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { CartComponent } from '../../components/cart/cart.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, ComponentsModule],
  exports: [],
  declarations: [HomeComponent, ProductsListComponent],
  providers: [],
})
export class HomeModule {}
