import { Component, OnInit } from '@angular/core';
import { TodosService } from "../../services/todos.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Todo } from "../../models/Todo";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoId: string;
  todo: Todo;
  isReadonly: boolean = true;
  editForm: FormGroup;
  isSubmitted: boolean;

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

      this.editForm = new FormGroup({
        title: new FormControl({value: `${this.todo.title}`, disabled: true}, Validators.required),
        completed: new FormControl({value: `${this.todo.completed}`, disabled: true})
      });
    }, error => {
      this.toastr.error(error.message, 'Error');
    }, () => {
      this.spinner.hide();
    });
  }

  onEdit() {
    this.isSubmitted = true;

    const updatedTodo = {
      title: this.editForm.value.title,
      completed: this.editForm.value.completed,
      userId: this.todo.userId,
      id: this.todo.id
    };
    this.spinner.show();
    this.todoService.updateTodo(updatedTodo).subscribe((data: Todo) => {
      if (!data.title.length) return;
      this.toastr.success('Task edited', 'Success');
      this.router.navigate(['/'])
    }, error => {
      this.toastr.error(error.message, 'Error');
    }, () =>{
      this.spinner.hide();
    });
  }

  onEnable() {
    this.isReadonly = false;
    this.editForm.get('title').enable();
    this.editForm.get('completed').enable();
  }
}
