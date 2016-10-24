import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'calorieFilter',
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform (input: Meal[], calorieFilter) {
    var output: Meal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (calorieFilter === "low") {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      } else if (calorieFilter === "high") {
          if (input[i].calories >= 500) {
            output.push(input[i]);
        }
      } else {
        return input;
      }
    }
    return output;
  }
}
