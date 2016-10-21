import { Component, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Meal } from './meal.model';


@Component({
  selector: 'edit',
  template: `
    <div *ngIf="selectedMeal">
      <h3>Edit</h3>
        <button (click)="sendMeal(selectedMeal)">Edit</button>
        <div class="edit-name">
          <label>Edit name:</label>
          <input [(ngModel)]="selectedMeal.name">
        </div>
        <div class="edit-details">
          <label>Edit details:</label>
          <input [(ngModel)]="selectedMeal.details">
        </div>
        <div class="edit-calories">
          <label>Edit calories:</label>
          <input [(ngModel)]="selectedMeal.calories">
        </div>
        <button (click)="hideEditForms()" class="done-button">Done</button>
      </div>
  `
})

export class EditComponent {
  @Output() clickSender = new EventEmitter();
  sendMeal(mealToSend: Meal) {
    this.clickSender.emit(mealToSend);
  }

  selectedMeal: Meal = null;
  editMeal(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  hideEditForms() {
    this.selectedMeal = null;
  }
}
