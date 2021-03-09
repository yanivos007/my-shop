import { StoreComponent } from './pages/home/store.component';
import { RegisterComponent } from './pages/login/components/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AdminComponent, StoreComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
