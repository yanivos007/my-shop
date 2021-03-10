import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, AdminComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, CommonModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
