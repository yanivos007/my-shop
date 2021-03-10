import { Component } from '@angular/core';
// import { LoginComponent } from './../order/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from './components/login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, ComponentsModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {}
