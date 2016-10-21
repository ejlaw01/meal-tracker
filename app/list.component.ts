import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';
import { Meal } from './meal.model';

@Component({
  selector: 'list',
  template: `
  <div class="list">
    <h2>My meals:</h2>
    <div class="list-item" *ngFor="let currentMeal of childMealList">
    <edit></edit>
    </div>
  </div>
  `
})

export class ListComponent {
  @Input() childMealList: Meal[];
}
