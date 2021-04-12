import { HomeService } from './../../pages/home/home.service';
import {  Observable } from 'rxjs';
import { ICart, IProduct } from './../../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products$: Observable<IProduct[]> = this.HomeService.getProducts();
  // products$ = new BehaviorSubject<IProduct>([]);
  constructor(private http: HttpClient, private HomeService: HomeService) {}

  getCart(): Observable<ICart[]> {
    return this.http.get<ICart[]>('http://localhost:8080/api/cart');
  }
  AddCart(cart: ICart): Observable<ICart[]> {
    return this.http.post<any>('http://localhost:8080/api/cart/add', cart);
  }
  addToCart(product: IProduct) {
    // this.items.push(product);
    let products: IProduct[] = JSON.parse(
      localStorage.getItem('product') || '[]'
    );
    products.push(product);
    localStorage.setItem('product', JSON.stringify(products));

    // this.products$.next(products);
  }
  removeFromCart(name: string) {
    let products: IProduct[] = JSON.parse(
      localStorage.getItem('product') || '[]'
    );
    let i = products.findIndex((p) => p.name.trim() === name.trim());
    products.splice(i, 1);
    localStorage.setItem('product', JSON.stringify(products));
  }
  decrece() {}

  // getProductsFromCart(){
  //   return JSON.parse(localStorage.getItem('product'));
  // }
}
