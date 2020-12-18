import { Output, EventEmitter, Component } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './CreateTodo.component.html',
  styleUrls: ['./CreateTodo.component.scss']
})

export class CreateTodo {
  @Output() addTodosEvent = new EventEmitter<Todo>();

  todo:string = '';
  inputError:boolean = false;

  inputHandler(event: { target: { value: string; }; }):void {
    const { value } = event.target;
    this.todo = value;
    this.inputError = false;
  };

  addTodo(event: { preventDefault: () => void; }):void {
    event.preventDefault();

    const validationTodo:string = this.todo.replace(/\s/g, '');

    if (validationTodo.length <= 3) {
      this.inputError = true;
      return;
    }

    this.inputError = false;

    this.addTodosEvent.emit({
      value: this.todo,
      checked: false,
    });

    this.todo = '';
  };
};
