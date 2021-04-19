import { map } from 'rxjs/operators';
// import { CartService } from './../../services/cart.service';
import { IProduct } from 'src/app/interfaces';
import { HomeService } from './../../pages/home/home.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CartService } from './cart.service';
import { ICart } from '../../interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart = this.CartService.cart$;
  products$: Observable<IProduct[]> = this.HomeService.getProducts();

  constructor(
    private HomeService: HomeService,
    public CartService: CartService,
    public http: HttpClient
  ) {}

  ngOnInit() {}

  continueToOrder() {
    console.log('on continue');
  }
}
