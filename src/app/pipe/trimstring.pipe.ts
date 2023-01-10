import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimstring'
})
export class TrimstringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    return value;
  }

}
