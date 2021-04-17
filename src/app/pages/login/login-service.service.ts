import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

 public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:8080/api/users');
  }
 public register(user: IUser): Observable<IUser[]> {
    return this.http.post<any>(
      `http://localhost:8080/api/users/register`,
      user
    );
  }
}
