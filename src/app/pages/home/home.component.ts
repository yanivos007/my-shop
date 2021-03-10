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
  // products: IProduct[] = [];

  constructor(private service: HomeService, public mainService: MainService) {
    this.mainService.getProducts();
  }

  ngOnInit(): void {
    // this.service.getProducts().subscribe((data) => (this.products = data));
  }
}
