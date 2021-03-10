import { IProduct, IUser, IOrder, ICart } from './../interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MainService {
   products: IProduct[] = []
  constructor(private http: HttpClient) {}

  public getProducts() {
    this.http
      .get<IProduct[]>('http://localhost:8080/api/products')
      .subscribe((data) => {
        console.log(data);
        this.products = data
      });
  }
  public getUsers() {
    this.http
      .get<IUser>('http://localhost:8080/api/users')
      .subscribe((data) => {
        console.log(data);
      });
  }
  // public getCarts() {
  //   this.http
  //     .get<ICart>('http://localhost:8080/api/carts')
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
  // public getOrders() {
  //   this.http
  //     .get<IOrder>('http://localhost:8080/api/orders')
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }
}
