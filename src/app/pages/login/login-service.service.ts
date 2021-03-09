import { IUser } from './../../interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }
  
    getUsers() : Observable<IUser[]>{
      return this.http.get<IUser[]>("http://localhost:8080/api/users")
    }
  }

