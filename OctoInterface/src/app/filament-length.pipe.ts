import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filamentLength'
})
export class FilamentLengthPipe implements PipeTransform {

  transform(value: number): string {
    return (value / 1000).toFixed(3) + 'm';
  }

}
