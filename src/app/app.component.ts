import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BoardGames Kingdom';
  // public currentUser$ = new BehaviorSubject<IUser | null>(null);
  currentUser: any;

  constructor(
    // public service: MainService,
    // public loginService: LoginServiceService,
    public auth: AuthenticationService,
    private router: Router
  ) {
    this.auth.currentUser$.subscribe((x) => (this.currentUser = x));
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
