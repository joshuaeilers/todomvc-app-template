import {Component} from 'angular2/core';
import {Todo} from '../../models/todo';
import {TodoListComponent} from '../todo-list/todo-list.component';

@Component({
  selector: 'app',
  directives: [TodoListComponent],
  templateUrl: 'app/components/app/app.html'
})
export class AppComponent {
  todos: Todo[];
  newTitle: string;
  
  constructor() {
    this.todos = Todo.findAll();
    this.newTitle = '';
  }
  
  add($event) {
    if ($event.keyCode === 13) {
      let title = this.newTitle.trim();
      if (title.length) {
        new Todo(this.newTitle, false).save();
        this.newTitle = '';
      }
    }
  }
  
  toggleAll() {
    let toggle = false;
    
    if (this.completedCount() < this.totalCount()) {
      toggle = true;
    }
    
    Todo.collection.forEach((todo) => todo.setCompleted(toggle));
  }
  
  clearCompleted() {
    Todo.collection.filter((todo) => todo.completed).forEach((todo) => todo.remove());
  }
  
  activeCount() {
    return Todo.activeCount;
  }
  
  completedCount() {
    return Todo.completedCount;
  }
  
  totalCount() {
    return Todo.collection.length;
  }
  
  pluralize(word, count) {
    return count === 1 ? word : word + 's';
  }
}