import { AuthenticationService } from './../../../services/authentication.service';
import { LoginServiceService } from './../login-service.service';
import { IUser } from './../../../interfaces';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginServiceService],
})
export class LoginComponent implements OnInit {
  // user: IUser[] = [];
  returnUrl: string | undefined;
  loggedIn = false;
  submitted = false;
  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService
  ) {
    if (this.auth.currentUser$) {
      this.router.navigate(['/']);
      console.log(this.auth.currentUser$);
    }
  }

  ngOnInit() {
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loggedIn = true;
    this.submitted = true;

    console.log(this.loggedIn);
    this.auth.login(this.f.email.value, this.f.password.value).subscribe(
      (data) => {
        if(data == null){
          return;
        }
        console.log(this.f.email.value);
        console.log(data);
        this.router.navigate(['/home']);
      },
    );
  }
}
