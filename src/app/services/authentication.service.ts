import { IUser } from './../interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public currentUser$ = new BehaviorSubject<IUser | null>(null);
  constructor(private http: HttpClient) {
    let user = localStorage.getItem('currentUser');
    if (user !== null) {
      this.currentUser$.next(JSON.parse(user));
    }
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`http://localhost:8080/users/login`, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser$.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser$.next(null);
  }
}
