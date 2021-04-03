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
  cart$: Observable<ICart[]> = this.HomeService.getCart();
  // @Input products: IProduct[]= []
  user: IUser[] = [];
  cart: ICart[] = [];

  constructor(private HomeService: HomeService, public http: HttpClient) {}

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
  addOne() {
    console.log('one added');
  }
  cancleOne() {
    console.log('one cancled');
  }
  AddToCart() {
    let products = this.products$ = this.HomeService.getProducts();
    console.log(products);
    // const newCart = { ...this.user, chosenProduct };
    Swal.fire({
      title: 'פרטים נוספים',
      icon: 'info',
      showCancelButton: true,
      imageUrl: '',
      // imageWidth: 400,
      // imageHeight: 200,
      confirmButtonText: '+1',
      cancelButtonText: '-1',
    }).then((result) => {
      if (result.value) {
        this.addOne();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.cancleOne();
      }
    });
  }
}
