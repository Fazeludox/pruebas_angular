import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RamdonLetterPipe } from 'src/app/pipes/ramdon-letter.pipe';



@NgModule({
  declarations: [RamdonLetterPipe],
  imports: [
    CommonModule
  ],
  exports: [RamdonLetterPipe]
})
export class PipesModule { }
