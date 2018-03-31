import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitNumber'
})
export class SplitNumberPipe implements PipeTransform {

  transform(num: string|number, separator = ','): string {
    return String(num).replace(/\B(?=(?:\d{3})+$)/g, separator);
  }

}
