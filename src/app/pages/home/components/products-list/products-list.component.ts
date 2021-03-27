import { IUser } from './../../../../interfaces';
import { HttpClient } from '@angular/common/http';
import { HomeService } from './../../home.service';
import { IProduct } from 'src/app/interfaces';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products$: Observable<IProduct[]> = this.HomeService.getStrategyGames();
  user: IUser[] = [];

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

  AddToCart(event: any) {
    let target = event.target;
    let chosenProduct = target.attributes.id;
    const newCart = { ...this.user, chosenProduct };
  }
}
