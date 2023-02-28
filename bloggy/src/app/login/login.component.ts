import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import authJSON from '../../assets/auth-data.json';
import { Router } from '@angular/router';

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

  constructor(private toastr: ToastrService, private router: Router) {}

  public login() {
    if (!this.loginForm.valid) {
      this.toastr.error('Please fill all fields.');
      return;
    }

    const { username, password } = this.loginForm.value;

    const user = authJSON.find((item) => item && item.username === username);

    if (!user) {
      this.toastr.error("User doesn't exist!");
      return;
    }

    if (user.password !== password) {
      this.toastr.error('Authentication Failed!');
      return;
    }

    const storageData = {
      id: user.id,
      username: user.username,
      role: user.role,
    };

    // saving in local storage
    localStorage.setItem('data', JSON.stringify(storageData));

    this.toastr.success(`Welcome back ${user.name}`, 'Login Successful!');
    this.router.navigate(['home']);
  }
}
