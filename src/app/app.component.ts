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
// productsList =[
//   {name: 'Z900', price: 8799},
//   {name: 'shubert helmet', price: 999},
//   {name: 'sport gloves', price: 99}
// ]
   
// cartProductsList = [];
 this.service.getUsers();
    this.service.getCarts();
  }
  logout() {
    console.log('logout Button');
  }
}
