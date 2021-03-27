import { AuthenticationService } from './../../../services/authentication.service';
// import { authenticationService } from './../../../components/autentication/authentication.service';
import { LoginServiceService } from './../login-service.service';
import { IUser } from './../../../interfaces';
// import { LoginComponent } from './../../../order/login.component';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginServiceService],
})
export class LoginComponent implements OnInit {
  user: IUser[] = [];
  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  loggedIn = false;

  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    // this.loginService.getUsers().subscribe((u) => (this.user = u));
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.loggedIn = true;
      console.log('on submit');
      localStorage.setItem('submitted', 'true');
    }
  }
}
