import { CartService } from './../../../../components/cart/cart.service';
import { IUser, ICart, IProduct } from './../../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './../../home.service';
// import { IProduct } from 'src/app/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products$: Observable<IProduct[]> = this.HomeService.getProducts();
  cart$: Observable<ICart[]> = this.CartService.getCart();
  // product : IProduct;
  // user: IUser[] = [];
  // cart: ICart[] = [];

  constructor(
    private HomeService: HomeService,
    public http: HttpClient,
    public CartService: CartService
  ) {}

  ngOnInit(): void {}

  getStrategyGames() {
    this.products$ = this.HomeService.getStrategyGames();
  }
  showFamily() {
    this.products$ = this.HomeService.getFamilyGames();
  }
  showCards() {
    this.products$ = this.HomeService.getCardsGames();
  }
  showFavorites() {
    this.products$ = this.HomeService.getFavoritesGames();
  }
  increment(product: IProduct) {
    this.CartService.addToCart(product);
  }
  decrement(product: IProduct) {
    this.CartService.decrece(product);
  }
  AddToCart(product: IProduct) {
    Swal.fire({
      title: 'פרטים נוספים',
      showCancelButton: true,
      imageUrl: product.imageUrl,
      text: product.description,
      // imageWidth: 400,
      // imageHeight: 200,
      confirmButtonText: '+1',
      // cancelButtonText: '-1',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('מוצר הוסף לעגלה');
        this.increment(product);
      }
      // else if (result.dismiss === Swal.DismissReason.cancel) {
      //   this.decrement(product);
      // }
    });
  }
}
