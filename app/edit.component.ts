import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';
import { Meal } from './meal.model';


@Component({
  selector: 'edit',
  template: `
    <div id="edit-form" *ngIf="childSelectedMeal">
      <h3>Edit</h3>
      <div class="edit-name">
        <label>Edit name:</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div class="edit-details">
        <label>Edit details:</label>
        <input [(ngModel)]="childSelectedMeal.details">
      </div>
      <div class="edit-calories">
        <label>Edit calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
      </div>
      <button (click)="finishEditing()" class="done-button">Done</button>
    </div>
  `
})

export class EditComponent {
  @Input() childSelectedMeal: Meal;

  finishEditing() {
    this.childSelectedMeal = null;
  }
}
