import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';
import { Meal } from './meal.model';

@Component({
  selector: 'list',
  template: `
  <div class="list">
    <h2>My meals:</h2>
    <div class="list-item" (click)="selectMeal(currentMeal)" *ngFor="let currentMeal of childMealList">
      <h3>{{ currentMeal.name }}</h3>
      <h4>{{ currentMeal.details }}</h4>
      <h4>{{ "Calories: " + currentMeal.calories }}</h4>
    </div>
    <edit
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing($event)"
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
}
