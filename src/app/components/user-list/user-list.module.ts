import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserListRoutingModule } from './user-list-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UserListComponent } from './user-list.component';
import { RouterModule } from '@angular/router';

const material = [
  MatButtonModule,
  MatDividerModule,
  MatCardModule
]

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    ...material,
    BrowserAnimationsModule,
    RouterModule,
  ],
  exports: [UserListComponent ]
})
export class UserListModule { }
