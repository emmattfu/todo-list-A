import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  isSubmitted: boolean;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z]{3,16}")]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.registrationForm.invalid) return;

    const email = this.registrationForm.value.email;
    const username = this.registrationForm.value.username;
    const password = this.registrationForm.value.password;

    this.spinner.show();
    this.auth.register(email, username, password).subscribe((data:boolean) => {
      if (data) this.router.navigate(['/']);
      this.auth.emitLoginEvent(this.auth.isAuth);
      this.toastr.success('Registration successful', 'Success')
    }, error => {
      this.toastr.error(error.error, 'Error');
    }, () => {
      this.spinner.hide();
    })
  }
}
