import { ICart } from '../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart : ICart[] = [];
  constructor() { }

  ngOnInit(): void { }
  
continue(){
  
}
}
