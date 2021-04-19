import { map } from 'rxjs/operators';
import { LoginServiceService } from './../../pages/login/login-service.service';
import { HomeService } from './../../pages/home/home.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart, IProduct } from './../../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products$: Observable<IProduct[]> = this.HomeService.getProducts();
  cart$ = new BehaviorSubject<ICart | null>(null);
  totalPrice$ = this.cart$.asObservable().pipe(
    map((cart) => {
      console.log(cart);
      let overall = 0;
      cart?.products.forEach((product) => {
        overall += product.quantity * product.product.price;
      });

      return overall;
    })
  );

  newCart = JSON.stringify({
    _id: '',
    userId: '',
    products: [],
    modifiedOn: new Date(),
  });

  constructor(
    private http: HttpClient,
    private HomeService: HomeService,
    private auth: AuthenticationService // LoginService: LoginServiceService
  ) {
    let cart: ICart = JSON.parse(localStorage.getItem('cart') || this.newCart);
    this.cart$.next(cart);

    this.cart$.subscribe((cart) => {
      console.log('constructor', cart);
      if (!cart || !cart.userId) {
        return;
      }

      this.AddCart(cart).subscribe((newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart));
        if (JSON.stringify(newCart) === JSON.stringify(this.cart$.getValue())) {
          return;
        }
        this.cart$.next(newCart);
      });
    });

    this.auth.currentUser$.subscribe((user) => {
      console.log('user', user);
      if (!user) {
        return;
      } else {
        let userCart = this.cart$.getValue();
        if (!userCart) {
          return;
        }
        userCart.userId = user._id;

        this.cart$.next(userCart);
      }
    });
  }

  getCart(): Observable<ICart> {
    return this.http.get<ICart>('http://localhost:8080/api/cart');
  }

  AddCart(cart: ICart): Observable<ICart> {
    return this.http.post<any>('http://localhost:8080/api/cart/add', cart);
  }

  addToCart(product: IProduct) {
    let cart: ICart = JSON.parse(localStorage.getItem('cart') || this.newCart);
    let filteredProducts = cart.products.find(
      (p) => p.product._id === product._id
    );
    if (filteredProducts) {
      filteredProducts.quantity++;
    }
    if (!filteredProducts) {
      cart.products.push({
        product,
        quantity: 1,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart$.next(cart);
  }

  removeFromCart(product: IProduct) {
    let cart: ICart = JSON.parse(localStorage.getItem('cart') || this.newCart);
    let index = cart.products.findIndex((p) => p.product._id === product._id);
    if (index > -1) {
      cart.products.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart$.next(cart);
  }
  decrece(product: IProduct) {
    let cart: ICart = JSON.parse(localStorage.getItem('cart') || this.newCart);
    let filteredProducts = cart.products.find(
      (p) => p.product._id === product._id
    );
    if (filteredProducts) {
      filteredProducts.quantity--;
      if (filteredProducts.quantity < 1) {
        this.removeFromCart(product);
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart$.next(cart);
    this.AddCart(cart).subscribe();
  }
}
