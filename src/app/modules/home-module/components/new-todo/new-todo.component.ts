import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";
import { TodosService } from "../../services/todos.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  newTaskForm: FormGroup;
  isSubmitted: boolean;

  constructor(
    public todoService: TodosService,
    public router: Router,
    public toastr: ToastrService,
    public spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.newTaskForm = new FormGroup({
      title: new FormControl('', Validators.required),
      userId: new FormControl(1, Validators.required)
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.newTaskForm.invalid) return;

    const newTask = {
      title: this.newTaskForm.value.title,
      userId: this.newTaskForm.value.userId,
      completed: false
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
