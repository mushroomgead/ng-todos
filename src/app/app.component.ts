import { Component, ElementRef, ViewChild } from '@angular/core';

type TodoItem = { title: string }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-todos';
  public items: TodoItem[] = [{
    title: 'hello no1',
  }, {
    title: 'hello no2',
  }];
  public todos: TodoItem[] = [];

  @ViewChild('todoInput') public todoInput!: ElementRef;

  public addTodo(text: string): void {
    this.todos.push({ title: text })
    this.todoInput.nativeElement.value = '';
  }

  public deleteTodo(i: number): void {
    this.todos = this.todos.filter((_, index) => i !== index)
  }
}
