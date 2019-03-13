import { Todo } from './todo/todo.model';
import { Subject } from 'rxjs';

export class TodoService {
  onChange = new Subject<Todo[]>();

  private todos: Todo[] = [];

  getTodos() {
    return this.todos.slice();
  }
  addTodo(text: string) {
    const newTodo = new Todo(text, false);
    this.todos.push(newTodo);
    this.onChange.next(this.todos.slice());
  }
  completeTodo(index: number) {
    this.todos[index].isCompleted = true;
    this.onChange.next(this.todos.slice());
  }
  deleteTodo(id: number) {
    this.todos.splice(id, 1);
    this.onChange.next(this.todos.slice());
  }
  editTodo(index: number, newText: string) {
    this.todos[index].text = newText;
    this.onChange.next(this.todos.slice());
  }
  setTodos(todos: Todo[]) {
    this.todos = todos;
    console.log(todos);
    this.onChange.next(this.todos.slice());
  }
}
