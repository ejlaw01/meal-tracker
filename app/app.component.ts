import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <h1>Meal Tracker</h1>
  <list
    [childMealList]="masterMealList"
  ></list>
  <new-meal
   (newMealSender)="addMeal($event)"
  ></new-meal>
  <edit
    (clickSender)="addMeal($event)"
  ></edit>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [];
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
