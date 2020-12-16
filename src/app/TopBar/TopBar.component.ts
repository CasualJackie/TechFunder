import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-topBar',
  templateUrl: './TopBar.component.html',
  styleUrls: ['./TopBar.component.scss']
})

export class TopBar {
  @Input() todos;

  clearTodos() {
    const filteredTodos = this.todos.filter(todo => (!todo.completed));
    this.todos = [...filteredTodos];
  };
}