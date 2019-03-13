import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Todo } from '../todo-list/todo/todo.model';
import { map } from 'rxjs/operators';
import { TodoService } from '../todo-list/todo.service';

@Injectable()
export class DataService {
  constructor(
    private http: HttpClient,
    private todoService: TodoService,
    private authService: AuthService
  ) {}

  saveTodos() {
    console.log('here');
    const token = this.authService.getToken();
    const req = new HttpRequest(
      'PUT',
      'https://superdupertodoapp.firebaseio.com/data.json',
      this.todoService.getTodos(),
      { reportProgress: true, params: new HttpParams().set('auth', token) }
    );

    return this.http.request(req);
  }

  getTodos() {
    const token = this.authService.getToken();
    return this.http
      .get<Todo[]>('https://superdupertodoapp.firebaseio.com/data.json', {
        params: new HttpParams().set('auth', token)
      })
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
