import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ListComponent } from './list.component';
import { NewMealComponent } from './add.component';
import { EditComponent } from './edit.component';
import { CaloriePipe } from './calorie.pipe';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ListComponent,
    NewMealComponent,
    EditComponent,
    CaloriePipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
