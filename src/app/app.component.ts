import { MainService } from './services/mainService';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-shop';
  constructor(public service: MainService) {
    this.service.getProducts();
    // this.service.getOrders();
    this.service.getUsers();
    // this.service.getCarts();
  }
}
