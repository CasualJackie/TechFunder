import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-todoList',
  templateUrl: './TodoList.component.html',
  styleUrls: ['./TodoList.component.scss']
})

export class TodoList {
  @Input() todos;
}
