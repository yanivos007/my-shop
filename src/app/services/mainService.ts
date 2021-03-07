import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  public get(){
    this.http.get('http://localhost:8080/api/products').
    subscribe((data)=> {console.log(data)});

  }
}
