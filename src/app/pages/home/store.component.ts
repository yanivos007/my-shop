import { Product } from './../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
products: Product[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
