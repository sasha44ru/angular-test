import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  private loading = true;
  private searchString = '';

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.fetchTodo().subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

}
