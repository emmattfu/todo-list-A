import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { Todo } from "../models/Todo";


@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private apiUrl: string = environment.api_url;

  constructor(
    private http: HttpClient
  ) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos`);
  }

  getTodo(id:string):Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/todos/${id}`);
  }

  updateTodo(todo: Todo):Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/todos/${todo.id}`, todo);
  }

  deleteTodo(id:number) {
    return this.http.delete(`${this.apiUrl}/todos/${id}`);
  }

  addTodo(todo: Todo) {
    return this.http.post(`${this.apiUrl}/todos`, todo);
  }
}
