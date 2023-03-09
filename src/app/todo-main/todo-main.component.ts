import { Component } from '@angular/core';
import { Todo, TodoService } from './todo service/todo-service.service';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.css']
})
export class TodoMainComponent {
  todos: Todo[] = [];
  newTodoTitle = '';
  status: boolean = false;
  
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getAll();
  }

  addTodo() {
    const todo = new Todo(this.newTodoTitle);
    this.todoService.add(todo);
    this.newTodoTitle = '';
  }

  remove(todo: Todo) {
    this.todoService.remove(todo);
  }

  updateTaskCompletion(index: number, completed: boolean) {
    this.todoService.updateTaskCompletion(index, completed);
  }

  clickEvent(){
    this.status = !this.status;       
}

}
