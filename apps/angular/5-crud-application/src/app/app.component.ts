import { Component } from '@angular/core';
import { TodoComponent } from './component/todo/todo.component';
import { LoadingIndicatorComponent } from './ui/loader/loader.component';

@Component({
  standalone: true,
  imports: [TodoComponent, LoadingIndicatorComponent],
  selector: 'app-root',
  template: `
    <app-todo></app-todo>
    <loader></loader>
  `,
})
export class AppComponent {}
