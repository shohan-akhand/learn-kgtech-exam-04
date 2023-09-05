import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    if (!value) {
      return 0;
    } else {
      const pound = value * 2.20462;
      return pound;
    }
  }
}
