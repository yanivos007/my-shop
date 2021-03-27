import { IProduct } from 'src/app/interfaces';
import { ICart } from './../interfaces';
import { IUser } from '../interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartService {
  public currentCart$ = new BehaviorSubject<ICart[] | null>(null);
  constructor(private http: HttpClient) {
    let cart = localStorage.getItem('currentCart');
    if (cart !== null) {
      this.currentCart$.next(JSON.parse(cart));
    }
  }

  addItem(product: IProduct) {
    const cart = this.currentCart$.getValue() || [];
    // cart.push(product);
    this.currentCart$.next(cart);
  }

  removeItem(product: IProduct) {
    const cart = this.currentCart$.getValue() || [];



    this.currentCart$.next(cart);
  }
}
