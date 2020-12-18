import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBar } from './components/TopBar/TopBar.component';
import { TodoList } from './components/TodoList/TodoList.component';
import { CreateTodo } from './components/CreateTodo/CreateTodo.component';

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
