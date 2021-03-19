import { LoginServiceService } from './../login/login-service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
// import { IUser } from './../../interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { getMaxListeners } from 'process';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstStepSubmitted: boolean = false;
  formSubmitted: boolean = false;

  firstStep = new FormGroup({
    id: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.email),
    password: new FormControl(null, Validators.required),
  });
  secondStep = new FormGroup({
    adress: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    

  });

  constructor(
    private router: Router,
    private userService: LoginServiceService
  ) {
  }

  ngOnInit() {}

  OnContinue() {
    this.firstStepSubmitted = true;
    console.log('onContinue');
  }
  onSubmit() {
    const newUser = { ...this.firstStep.value, ...this.secondStep.value };
    console.log('on submit ');
    this.userService.register(newUser).subscribe();
  }

  dummyData1() {
    this.firstStep.setValue({
      id: 301928394,
      email: 'yanivos123@gmail.com',
      password: '123456',
    });
  }
  dummyData2() {
    this.secondStep.setValue({
      adress: 'ber 15',
      city: 'tel aviv',
      firstName: 'yanivos',
      lastName: 'levos',
    });
  }
}
