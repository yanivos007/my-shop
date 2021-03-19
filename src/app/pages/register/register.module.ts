import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule, FormsModule , ReactiveFormsModule , CommonModule],
  exports: [],
  declarations: [RegisterComponent],
  providers: [],
})
export class RegisterModule {}
