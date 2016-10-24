import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';
import { Meal } from './meal.model';

@Component({
  selector: 'list',
  template: `
  <div class="list">
    <h2>My meals:</h2>
    <h3>Filter by...</h3>
    <select class="dropdown" (change)="onChange($event.target.value)">
      <option selected="selected" value="all">All</option>
      <option value="low">Less than 500</option>
      <option value="high">More than 500</option>
    </select>
    <div class="list-item" (click)="selectMeal(currentMeal)" *ngFor="let currentMeal of childMealList | calorieFilter:selectedCalorieFilter">
      <h3>{{ currentMeal.name }}</h3>
      <h4>{{ currentMeal.details }}</h4>
      <h4>{{ "Calories: " + currentMeal.calories }}</h4>
    </div>
    <edit
      [childSelectedMeal]="selectedMeal"
    ></edit>
  </div>
  `
})

export class ListComponent {
  @Input() childMealList: Meal[];
  selectedMeal: Meal;
  selectMeal(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
    console.log(this.selectedMeal);
  }
  public selectedCalorieFilter: string = "all";
  onChange(optionFromMenu) {
    this.selectedCalorieFilter = optionFromMenu;
    console.log(this.selectedCalorieFilter);
  }
}
