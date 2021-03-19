import { HttpClient } from '@angular/common/http';
import { MainService } from './../../services/mainService';
import { HomeService } from './home.service';
import { IProduct } from '../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  constructor(
    private homeService: HomeService,
    public mainService: MainService,
    public http: HttpClient
  ) {
    this.homeService.getProducts();
  }

  ngOnInit(): void {
    this.homeService.getProducts().subscribe((data) => (this.products = data));
  }
  showStrategy() {

    // this.http
    //   .get('http://localhost:8080/api/products')
    //   .filter((products) => products. )
    //   .map((person) => 'Dr. ' + person.name)
    //   .subscribe((data) => {
    //     this.doctors.push(data);
    //   });
    let products = this.products.map(
      (products) => products.categoryName === 'אסטרטגיה'
    );
    console.log(products);
   
  }
  showFamily() {
    this.products;
    console.log(this.products);
  }
  showCards() {
    console.log('cards games');
  }
  showFavorites() {
    console.log('Favorites games');
  }

  AddToCart() {
    console.log('adding to cart');
  }
}
