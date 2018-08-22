import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brand = 'Todo-List';
  token:string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.userLoginEvent.subscribe((token:string) => {
      this.token = token;
    });
  }

  onLogout() {
    this.auth.logout();
    this.token = '';
  }

}
