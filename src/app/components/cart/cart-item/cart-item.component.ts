import { ICart, IProduct } from './../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './../../../pages/home/home.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  products$: Observable<IProduct[]> = this.HomeService.getProducts();
  // quantity: any;
  constructor(
    public CartService: CartService,
    private HomeService: HomeService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.quantity = this.CartService.cart$.subscribe((cart) => {
    //   cart?.products.quantity;
    //   console.log(this.quantity);
    // });
  }

  addToCart(product: IProduct) {
    this.CartService.addToCart(product);
    this.products$.subscribe((p) => {
      p.push(product);
      console.log(product);
    });
  }
  deleteFromCart(product: IProduct) {
    this.CartService.removeFromCart(product);
    console.log(product);
  }

  getCartItem(): Observable<ICart[]> {
    return this.http.get<ICart[]>('localhost:8080/api/cart');
  }
}
