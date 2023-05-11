import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserFormModule { }
