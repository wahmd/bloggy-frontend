import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import authJSON from '../assets/auth-data.json';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private toastr: ToastrService, private router: Router) {}

  login(form: any) {
    const { username, password } = form;

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
      name: user.name,
    };

    // saving in local storage
    localStorage.setItem('data', JSON.stringify(storageData));

    this.toastr.success(`Welcome back ${user.name}`, 'Login Successful!');
    this.router.navigate(['home']);
  }

  isLoggedIn() {
    return localStorage.getItem('data');
  }

  logout() {
    localStorage.removeItem('data');
    this.router.navigate(['login']);
    this.toastr.success('Logout Successful!');
  }
}
