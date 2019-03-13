import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.css']
})
export class TodoCountComponent implements OnInit {
  completed: number;
  total: number;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.completed = this.todoService.getTodos().filter(todo => todo.isCompleted === true).length;
    this.total = this.todoService.getTodos().length;

    this.todoService.onChange.subscribe(() => {
      this.completed = this.todoService.getTodos().filter(todo => todo.isCompleted === true).length;
      this.total = this.todoService.getTodos().length;
    });
  }

}
