// import { CartService } from './../../services/cart.service';
import { IProduct } from 'src/app/interfaces';
import { HomeService } from './../../pages/home/home.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CartService } from './cart.service';
import { ICart } from '../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart = this.CartService.cart$;
  products$: Observable<IProduct[]> = this.HomeService.getProducts();
  // private filteredCartItems: Subject<ICart[]> = new Subject<ICart[]>();
  totalPrice = 0;

  constructor(
    private HomeService: HomeService,
    public CartService: CartService,
    public http: HttpClient
    
  ) {
//     let totalPrice = this.cart.forEach(p => p?.products.quantity * p?.products.price)
// console.log(totalPrice)
  }

  ngOnInit(): void {
  }


  
  continueToOrder() {
    console.log('on continue');
    // const cartName = this.cartItems.map((c) => c.name);
    // console.log(cartName);
    // this.service.AddCart(cart).subscribe();
  }
}
