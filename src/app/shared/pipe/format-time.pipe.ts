import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
  
    return (value + '').length === 1 ? '0' + value : value + '';
  }

}
