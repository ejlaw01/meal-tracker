import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h4>New Meal:</h4>
    <div>
      <label>Food:</label>
      <input #name>
    </div>
    <div>
      <label>Details:</label>
      <input #details>
    </div>
    <div>
      <label>Calories:</label>
      <input #calories>
    </div>
    <button id="add-button" (click)="
    addClickedMeal(name.value, details.value, calories.value);
    name.value='';
    details.value='';
    calories.value='';
    ">Add Meal</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClickedMeal(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
