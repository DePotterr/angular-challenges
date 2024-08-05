import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ListItemTemplateDirective } from '../../shared/directive/list-item-template.directive';
import { LoadingService } from '../../shared/service/loading.service';
import { ListItemComponent } from '../../ui/list-item/list-item.component';
import { Todo } from './todo.interface';
import { TodoStore } from './todo.store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  standalone: true,
  imports: [ListItemComponent, ListItemTemplateDirective],
})
export class TodoComponent implements OnInit {
  readonly loaderService = inject(LoadingService);
  readonly todoStore = inject(TodoStore);
  todos: WritableSignal<Todo[]> = signal([]);

  ngOnInit() {
    this.todoStore.getAll();
  }

  update(todo: Todo) {
    this.todoStore.updateTodo(todo);
  }

  delete(todo: Todo) {
    this.todoStore.deleteTodo(todo);
  }
}
