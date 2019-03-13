import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodoCountComponent } from './todo-count/todo-count.component';

@NgModule({
  declarations: [TodoListComponent, TodoComponent, TodoCountComponent],
  imports: [CommonModule],
  exports: [],
  providers: []
})
export class TodoListModule {}
