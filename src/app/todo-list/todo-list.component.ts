import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo/todo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  @ViewChild('textInput') textInput: ElementRef;
  todos: Todo[] = [];
  subscription: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // first initialize of todos
    this.todos = this.todoService.getTodos();
    // subscribe to changes and update displayed todos on change
    this.subscription = this.todoService.onChange.subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }
  // prevent leaks
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  add(text: string) {
    this.todoService.addTodo(text);
    this.textInput.nativeElement.value = '';
  }
  // add if enter pressed in input field
  keyDownFunction(event: any, text: string) {
    if (event.keyCode === 13) {
      this.add(text);
    }
  }
}
