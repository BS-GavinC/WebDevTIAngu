import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberGetter'
})
export class NumberGetterPipe implements PipeTransform {

  intValues : string[] = [];

  transform(value: string): string {

    this.intValues = []

    for (const element of value.split('')) {
      if (!isNaN(+element)) {
        this.intValues.push(element)
      }
    }

    return this.intValues.join('')
  }

}
