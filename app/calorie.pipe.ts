import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calorie',
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform (input: Meal[], meal) {
    var output: Meal[] = [];
    return output;
  }
}
