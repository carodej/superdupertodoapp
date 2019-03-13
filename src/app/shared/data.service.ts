import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Todo } from '../todo-list/todo/todo.model';
import { map } from 'rxjs/operators';
import { TodoService } from '../todo-list/todo.service';

@Injectable()
export class DataService {
  constructor(private http: HttpClient, private todoService: TodoService) {}

  saveTodos() {
    console.log('here');

    const req = new HttpRequest(
      'PUT',
      'https://superdupertodoapp.firebaseio.com/data.json',
      this.todoService.getTodos(),
      { reportProgress: true }
    );

    return this.http.request(req);
  }

  getTodos() {
    return this.http
      .get<Todo[]>('https://superdupertodoapp.firebaseio.com/data.json')
      .pipe(
        map(todos => {
          if (!todos) {
            todos = [];
          }
          return todos;
        })
      )
      .subscribe((todos: Todo[]) => {
        this.todoService.setTodos(todos);
      });
  }
}
