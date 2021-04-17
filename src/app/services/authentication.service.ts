import { IUser } from './../interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export  class  AuthenticationService {
  public currentUser$ = new BehaviorSubject<IUser | null>(null);
  constructor(private http: HttpClient) {
    let user = localStorage.getItem('currentUser');
    if (user !== null) {
      this.currentUser$.next(JSON.parse(user));
    }
  }
 
  login(email: string, password: string) {
    return this.http
      .post<any>(`http://localhost:8080/api/users/login`, { email, password })
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
    localStorage.removeItem('currentUser');
    this.currentUser$.next(null);
  }
  // registerUser(user: object): Observable<IUser> {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   return this.http.post<IUser>(
  //     `http://localhost:8080/api/user/register`,
  //     user,
  //     { headers: headers }
  //   );
  // }
}
