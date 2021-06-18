import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitConverter'
})
export class UnitConverterPipe implements PipeTransform {

  transform(value: number, type: string): number {
    if (type === 'decimetre') {
      value = value / 10;
    } else if (type === 'hectogram') {
      value = value / 10;
    }

    return value;
  }

}
