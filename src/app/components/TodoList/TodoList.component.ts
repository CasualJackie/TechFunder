import { Input, Component } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './TodoList.component.html',
  styleUrls: ['./TodoList.component.scss']
})

export class TodoList {
  @Input() todos:Todo[];

  loadImage(todo:Todo) {
    return todo.checked
      ? './assets/checked.png'
      : './assets/not_checked.png'
  };

  todoStatus(todo:Todo) {
    return todo.checked = !todo.checked;
  };
}
