import { Observable } from 'rxjs';
import { ICart } from './../../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart: ICart[]=[]
  constructor(private http: HttpClient) { }

  getCart(): Observable<ICart[]> {
    return this.http.get<ICart[]>('http://localhost:8080/api/cart');
  }
}
