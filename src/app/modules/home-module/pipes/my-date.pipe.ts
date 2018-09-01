import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mydate'
})

export class MyDatePipe implements PipeTransform {
  transform(value: number, local: string, options: object) {
    let newValue = new Date(value).toLocaleString(local, options);
    return newValue;
  }
}
