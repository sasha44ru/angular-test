import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {FormsModule} from '@angular/forms';
import {TodosFilterpPipe} from './shared/todos-filterp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodosFilterpPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
