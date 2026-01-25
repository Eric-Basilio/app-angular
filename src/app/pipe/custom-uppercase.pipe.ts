import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'appUppercase'})
export class CustomUppercasePipe implements PipeTransform{

  transform(value: any, ...args: any[]) {
    if (value){
        return value.toUpperCase();
    } else{ return"";

    };
  }

}