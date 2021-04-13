import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IProduct, ICart } from './../../interfaces';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  products: IProduct[] = [];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:8080/api/products');
  }
 
  getProductById(index: any): Observable<IProduct[]> {
    let id = index;
    return this.http.get<IProduct[]>(
      `http://localhost:8080/api/products/${id}`
    );
  }
  getFamilyGames(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('http://localhost:8080/api/products')
      .pipe(
        map((p) =>
          p.filter((product) => product.categoryName.trim() === 'לכל המשפחה')
        )
      );
  }
  getStrategyGames(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('http://localhost:8080/api/products')
      .pipe(
        map((p) =>
          p.filter((product) => product.categoryName.trim() === 'אסטרטגיה')
        )
      );
  }
  getCardsGames(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('http://localhost:8080/api/products')
      .pipe(
        map((p) =>
          p.filter((product) => product.categoryName.trim() === 'קלפים')
        )
      );
  }
  getFavoritesGames(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('http://localhost:8080/api/products')
      .pipe(
        map((p) =>
          p.filter((product) => product.categoryName.trim() === 'מועדפים')
        )
      );
  }

  // getStrategyGames(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(
  //     'http://localhost:8080/api/products/strategy'
  //   );
  // }

  // AddProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>('http://localhost:8080/api/products/add');
  // }
}
