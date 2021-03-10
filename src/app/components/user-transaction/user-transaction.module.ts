import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTransactionComponent } from './user-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'

import { RouterModule } from '@angular/router'
import { UserTransactionRoutingModule } from './user-transaction.routing.module';
import { MatListModule } from '@angular/material/list';
import {  MatButtonModule } from '@angular/material/button';

const material = [
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatListModule,
  MatButtonModule
]

@NgModule({
  declarations: [UserTransactionComponent],
  imports: [
    CommonModule,
    ...material,
    RouterModule,
    UserTransactionRoutingModule
  ],
  exports: [UserTransactionComponent]
})
export class UserTransactionModule { }
