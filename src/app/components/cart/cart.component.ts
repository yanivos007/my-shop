import { CartService } from './../../services/cart.service';
import { ICart } from '../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: ICart[]=[];
  cartItems = [
    // { id: 1, quantity: 5, price: 15 },
    // { id: 2, quantity: 3, price: 17 },
    // { id: 3, quantity: 1, price: 12 },
    // { id: 4, quantity: 4, price: 14 },
  ];
  totalPrice = 0;
  constructor(service: CartService) {}

  ngOnInit(): void {
    // this.CartService.getCart()
    // this.cartItems.forEach((item) => {
    //   this.totalPrice += item.quantity * item.price;
    // });
  }

  continue() {}
}
