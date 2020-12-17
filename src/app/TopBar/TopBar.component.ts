import { Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-topBar',
  templateUrl: './TopBar.component.html',
  styleUrls: ['./TopBar.component.scss']
})

export class TopBar {
  @Output() clearTodosEvent = new EventEmitter<any>();

  emptyTrash() {
    this.clearTodosEvent.emit();
  }
}