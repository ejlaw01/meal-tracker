import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Meal } from './meal.model';


@Component({
  selector: 'edit',
  template: `
    <div *ngIf="childSelectedMeal">
      <h3>Edit</h3>
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
        <button (click)="finishedEditing()" class="done-button">Done</button>
      </div>
  `
})

export class EditComponent {
  @Input() childSelectedMeal: Meal;
  @Output() clickSender = new EventEmitter();
  
  finishedEditing() {
    this.clickSender.emit();
  }

  /*selectedMeal: Meal = null;
  editMeal(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  hideEditForms() {
    this.selectedMeal = null;
  }*/
}
