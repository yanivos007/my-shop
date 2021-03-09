import { HttpClient } from '@angular/common/http';
import { IProduct } from './../../interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  products: IProduct[] = [];
  constructor(private http: HttpClient) {}

  getProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>("http://localhost:8080/api/products")
  }
}
