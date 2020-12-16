import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBar } from './TopBar/TopBar.component';
import { TodoList } from './TodoList/TodoList.component';
import { CreateTodo } from './CreateTodo/CreateTodo.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBar,
    TodoList,
    CreateTodo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
