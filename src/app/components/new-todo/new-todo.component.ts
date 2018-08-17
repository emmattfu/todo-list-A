import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from "../../models/Todo";
import { NgForm } from "@angular/forms";
import { TodosService } from "../../services/todos.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  todo: Todo = {
    title: '',
    completed: false,
    userId: 1
  };

  @ViewChild('form') form: NgForm;

  constructor(
    public todoService: TodosService,
    public router: Router,
    public toastr: ToastrService,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.invalid) return;

    const newTask = {
      title: this.todo.title,
      completed: this.todo.completed,
      userId: 1
    };

    this.spinner.show();
    this.todoService.addTodo(newTask).subscribe((data: Todo) => {
      this.spinner.hide();
      this.toastr.success('Task added', 'Success');
      this.router.navigate(['/']);
    }, error => {
      this.spinner.hide();
      this.toastr.error(error.message, 'Error');
    });
  }
}
