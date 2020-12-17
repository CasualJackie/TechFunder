import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [];

  clearTodos() {
    this.todos = this.todos.filter(todo => (!todo.completed));
  };
}
