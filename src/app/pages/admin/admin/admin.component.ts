import { AdminService } from './../admin.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  addProduct = new FormGroup({
    categoryName: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    imageUrl: new FormControl(''),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
  onAdd() {
    const product = this.addProduct.value;
    console.log('adding new product');
    this.adminService.AddProduct(product).subscribe();
  }

  dummyData() {
    this.addProduct.setValue({
      categoryName: 'קלפים',
      name: 'משחק כלשהו',
      imageUrl: 'https://www.amigo.co.il/wp-content/uploads/2016/07/bg788.jpg',
      price: 120,
      description: 'לא חשוב עכשיו',
    });
  }
}
