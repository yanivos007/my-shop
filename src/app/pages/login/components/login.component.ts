import { LoginServiceService } from './../login-service.service';
import { IUser } from './../../../interfaces';
// import { LoginComponent } from './../../../order/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginServiceService]
})
export class LoginComponent implements OnInit {
  user: IUser[] = [];
  // selectedUser : IUser;
  constructor(private userService: LoginServiceService) {}
  
  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe((u) => (this.user = u));
  }
  login() {
    console.log('on continue');
  }
}
