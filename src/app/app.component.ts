import { Component } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  todos:Todo[] = [];

  clearTodos() {
    this.todos = this.todos.filter(todo => (!todo.checked));
  };

  addTodos(todo:Todo) {
    this.todos = [...this.todos, todo];
  };
}
