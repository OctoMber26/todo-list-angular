import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  add(todo: Todo) {
    this.todos.push(todo);
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  updateTaskCompletion(index: number, completed: boolean) {
    this.todos[index].completed = completed;
  }

  isTaskCompleted(index: number) {
    return this.todos[index].completed;
  }

  getAll() {
    return this.todos;
  }


}

export class Todo {
  constructor(public title: string, public completed: boolean = false) {}
}
