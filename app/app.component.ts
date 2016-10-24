import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <h1>Meal Tracker</h1>
  <new-meal
    (newMealSender)="addMeal($event)"
  ></new-meal>
  <list
    [childMealList]="masterMealList"
  ></list>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [];
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
