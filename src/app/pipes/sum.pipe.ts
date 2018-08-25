import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sum',
  pure: false
})

export class SumPipe implements PipeTransform {
  transform(value: number[]) {
    let sum = 0;
    value.forEach(element => {
      sum += element;
    });
    return sum;
  }
}
