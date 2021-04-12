// import { CartService } from './../../services/cart.service';
import { IProduct } from 'src/app/interfaces';
import { HomeService } from './../../pages/home/home.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';
import { ICart } from '../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<ICart[]> = this.HomeService.getCart();
  products$: Observable<IProduct[]> = this.HomeService.getProducts();
  totalPrice = 0;

  constructor(
    private HomeService: HomeService,
    public service: CartService,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    this.service.getCart();
    this.cart$.forEach((item) => {
      this.totalPrice = item.quantity * item.price;
    });
  }

  continueToOrder() {
    // this.CartService.addProductToCart()
    console.log('on continue');
    // const cartName = this.cartItems.map((c) => c.name);
    // console.log(cartName);
    // this.service.AddCart(cart).subscribe();
  }
}
