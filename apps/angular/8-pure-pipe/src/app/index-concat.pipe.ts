import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexConcat',
  standalone: true,
})
export class IndexConcatPipe implements PipeTransform {
  transform(str: string, index: number): string {
    return `${str}-${index}`;
  }
}
