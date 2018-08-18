import { Component, OnInit } from '@angular/core';
import { TodosService } from "../../services/todos.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Todo } from "../../models/Todo";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoId: string;
  todo: Todo;
  isReadonly: boolean = true;

  constructor(
    public todoService: TodosService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public toastr: ToastrService,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.todoId = this.activatedRoute.snapshot.params['id'];
    this.todoService.getTodo(this.todoId).subscribe((data: Todo) => {
      this.todo = data;
      this.spinner.hide();
    }, error => {
      this.toastr.error(error.message, 'Error');
      this.spinner.hide();
    });
  }

  onEdit(form) {
    console.log(form);
    this.isReadonly = false;
    const updatedTodo = Object.assign({}, this.todo);
    this.todoService.updateTodo(updatedTodo).subscribe((data: Todo) => {
      if (!data.title.length) return;

      this.toastr.success('Task edited', 'Success');
      this.router.navigate(['/'])
    }, error => {
      this.toastr.error(error.message, 'Error');
    });
  }
}
