import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ramdonLetter',
  pure: true
})
export class RamdonLetterPipe implements PipeTransform {

  transform(str: string): string {

    let input = str.trim();
    for (let i = 0; i < input.length; i++) {
      if (Math.random() > 0.5) {
        input = input.replace(input.charAt(i), input.charAt(i).toUpperCase());
      }
    }
    return input
  }

}
