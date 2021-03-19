import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:8080/api/products');
  }
  AddProduct(product: IProduct): Observable<IProduct[]> {
    return this.http.post<any>(
      'http://localhost:8080/api/products/add',
      product
    );
  }
}
