import { Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './TopBar.component.html',
  styleUrls: ['./TopBar.component.scss']
})

export class TopBar {
  @Output() clearTodosEvent = new EventEmitter<void>();

  emptyTrash() {
    this.clearTodosEvent.emit();
  }
}