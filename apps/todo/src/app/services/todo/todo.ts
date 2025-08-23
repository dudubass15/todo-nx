import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class Todo {

  private _storage = localStorage;

  private _key = 'todos';

  getTodos(): Observable<Item[]> {
    const todos = this._storage.getItem(this._key);
    if (!todos) {
      return new Observable<Item[]>(observer => {
        observer.next([]);
        observer.complete();
      });
    }

    return new Observable<Item[]>(observer => {
      observer.next(todos ? JSON.parse(todos) : []);
      observer.complete();
    });
  }

  addTodo(todo: Item): Observable<Item[]> {
    const todos = this.getTodos();

    return new Observable<Item[]>(observer => {
      todos.subscribe(currentTodos => {
        todo.id = new Date().getTime().toString(); // Simple ID generation
        // if (!currentTodos) {
        //   currentTodos = [];
        // }
        // if (currentTodos.some(t => t.id === todo.id)) {
        //   observer.error(new Error('Todo with this ID already exists'));
        //   return;
        // }
        // if (!todo.description || todo.description.trim() === '') {
        //   observer.error(new Error('Todo title cannot be empty'));
        //   return;
        // }
        // if (currentTodos.length >= 100) {
        //   observer.error(new Error('Cannot add more than 100 todos'));
        //   return;
        // }
        // if (currentTodos.length >= 10 && currentTodos.some(t => t.isActive)) {
        //   observer.error(new Error('Cannot add more than 10 todos if any are completed'));
        //   return;
        // }

        currentTodos.push(todo);
        this._storage.setItem(this._key, JSON.stringify(currentTodos));
        observer.next(currentTodos);
        observer.complete();
      });
    });
  }

  removeTodo(todo: string): Observable<Item[]> {
    const todos = this.getTodos();
    return new Observable<Item[]>(observer => {
      todos.subscribe(currentTodos => {
        currentTodos = currentTodos.filter(t => t.id !== todo);
        this._storage.setItem(this._key, JSON.stringify(currentTodos));
        observer.next(currentTodos);
        observer.complete();
      });
    });
  }

  clearTodos(): void {
    this._storage.removeItem(this._key);
  }

}
