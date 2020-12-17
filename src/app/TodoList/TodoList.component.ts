import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-todoList',
  templateUrl: './TodoList.component.html',
  styleUrls: ['./TodoList.component.scss']
})

export class TodoList {
  @Input() todos;

  loadImage(todo) {
    return todo.checked
      ? './assets/checked.png'
      : './assets/not_checked.png'
  };

  todoStatus(todo) {
    return todo.checked = !todo.checked;
  };
}
