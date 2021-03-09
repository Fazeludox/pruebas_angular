import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from 'src/app/module/pipes/pipes.module';

const material = [
  MatListModule,
  MatIconModule,
  MatButtonModule
]


@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    RouterModule,
    ...material,
    PipesModule

  ],
  exports: [UserDetailsComponent]
})
export class UserDetailsModule { }
