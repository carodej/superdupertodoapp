import { TodoService } from './../todo.service';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i: number;
  completeText: string;
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  complete(id: number) {
    this.todoService.completeTodo(id);
  }
  delete(id: number) {
    this.todoService.deleteTodo(id);
  }
  edit(index: number) {
    const newText = prompt();
    this.todoService.editTodo(index, newText);
  }
}
