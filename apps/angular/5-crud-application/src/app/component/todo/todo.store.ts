import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

type TodoState = {
  todos: Todo[];
  isLoading: boolean;
};

const initialState: TodoState = { todos: [], isLoading: false };

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, todoService = inject(TodoService)) => ({
    getAll() {
      patchState(store, { isLoading: true });

      todoService.getAll().subscribe((todos) => {
        patchState(store, { todos, isLoading: false });
      });
    },

    updateTodo(todo: Todo) {
      patchState(store, { isLoading: true });

      todoService.update(todo).subscribe((todoUpdated) => {
        const updatedTodos = store
          .todos()
          .map((t) => (t.id === todoUpdated.id ? todoUpdated : t));
        patchState(store, { todos: updatedTodos, isLoading: false });
      });
    },

    deleteTodo(todo: Todo) {
      patchState(store, { isLoading: true });

      todoService.delete(todo).subscribe(() => {
        const updatedTodos = store.todos().filter((t) => t.id !== todo.id);
        patchState(store, { todos: updatedTodos, isLoading: false });
      });
    },
  })),
);
