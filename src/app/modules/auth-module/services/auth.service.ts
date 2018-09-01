import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl: string = environment.auth_url;
  private _token: string;
  private userLogin: BehaviorSubject<string> = new BehaviorSubject<string>(this.isAuth);
  public userLoginEvent = this.userLogin.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public get isAuth() {
    return localStorage.getItem('token');
  }

  private set token(token) {
    this._token = token;
    localStorage.setItem('token', token)
  }

  login(email: string, password: string):Observable<boolean> {
    return this.http.post(`${this.authUrl}/login`, {email, password}, {responseType: 'text'}).pipe(
      map((data: string):boolean => {
        this.token = data;
        return true;
      })
    )
  }

  logout() {
    localStorage.clear();
  }

  register(email:string, name:string, password:string):Observable<boolean> {
    return this.http.post(`${this.authUrl}/signup`, {email, name, password}, {responseType: 'text'}).pipe(
      map((data:string):boolean =>{
        this.token = data;
        return true;
      })
    )
  }

  emitLoginEvent(res:string):void {
    this.userLogin.next(res);
  }
}
