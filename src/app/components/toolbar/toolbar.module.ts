import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatIconModule  } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

const material = [
MatToolbarModule,
MatIconModule,
MatButtonModule
]


@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    ...material,
    RouterModule
  ],
  exports: [ToolbarComponent, RouterModule]
})
export class ToolbarModule { }
