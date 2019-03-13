import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'camel'})
export class CamelPipe implements PipeTransform {
  transform(value: any): any {
    return value.replace(/ /g, '');
  }
}
