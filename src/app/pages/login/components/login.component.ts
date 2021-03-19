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
  // user: IUser[] = [];
  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  loading = false;
  submitted = false;

  constructor(
    private loginService: LoginServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.loginService.getUsers().subscribe((u) => (this.user = u));
  
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
  }

}
