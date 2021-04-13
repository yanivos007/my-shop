import { ICart } from './../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './../../../pages/home/home.service';
import { IProduct } from 'src/app/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  products$: Observable<IProduct[]> = this.HomeService.getProducts();

  constructor(
    private route: ActivatedRoute,
    public CartService: CartService,
    private HomeService: HomeService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  addToCart(product: IProduct) {
    this.CartService.addToCart(product);
    this.products$.subscribe((p) => {
      p.push(product);
    });
    // window.alert('Your product has been added to the cart!');
  }
  getCartItem(): Observable<ICart[]> {
    return this.http.get<ICart[]>('localhost:8080/api/cart');
  }
}
