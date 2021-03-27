import { IUser } from './../../interfaces';
import { HttpClient } from '@angular/common/http';
import { MainService } from './../../services/mainService';
import { HomeService } from './home.service';
import { IProduct } from '../../interfaces';
import { Component, Input, OnInit, Output } from '@angular/core';
// import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, public http: HttpClient) {}

  ngOnInit() {}
  
}
