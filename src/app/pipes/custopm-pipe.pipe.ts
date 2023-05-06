import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custopmPipe'
})
export class CustopmPipePipe implements PipeTransform {

  transform(value: any): string {
    
    return value.toUpperCase();
  }

}
