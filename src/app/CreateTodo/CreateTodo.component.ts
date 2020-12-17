import { Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-createTodo',
  templateUrl: './CreateTodo.component.html',
  styleUrls: ['./CreateTodo.component.scss']
})

export class CreateTodo {
  @Output() addTodosEvent = new EventEmitter<any>();

  todo = '';
  inputError = false;

  inputHandler(event: any) {
    const { value } = event.target;
    this.todo = value;
    this.inputError = false;
  };

  addTodo(event: any) {
    event.preventDefault();

    const validationTodo = this.todo.replace(/\s/g, '');

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
