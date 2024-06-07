import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDollar',
  standalone: true,
})
export class ConvertToDollarPipe implements PipeTransform {
  transform(value: string): string {
    return '$' + value + ' million';
  }
}
