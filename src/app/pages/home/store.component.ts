import { HomeService } from './home.service';
import { IProduct } from './../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => (this.products = data));
  }
}
