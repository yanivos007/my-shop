import { IUser } from './../../interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user : IUser = {
    'adress': '','city':'', 'email': '' , 'firstName': '', 'lastName': '', 'password': '' , 

}
  constructor() {}

  ngOnInit(): void {}
  OnContinue() {
    console.log('on continue');
  }
  register() {
    console.log('register');
  }
}
