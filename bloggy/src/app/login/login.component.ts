import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import authJSON from '../../assets/auth-data.json';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

interface LoginForm {
  username: FormControl;
  password: FormControl;
}

@Component({
  selector: 'bloggy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm> = new FormGroup<LoginForm>({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  login() {
    if (!this.loginForm.valid) {
      this.toastr.error('Please fill all fields.');
      return;
    }
    this.authService.login(this.loginForm.value);
  }
}
