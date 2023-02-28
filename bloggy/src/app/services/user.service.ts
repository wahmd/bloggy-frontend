import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsername() {
    const data = localStorage.getItem('data');
    if (!data) {
      return;
    }

    const { username } = JSON.parse(data);
    return username;
  }

  getName() {
    const data = localStorage.getItem('data');
    if (!data) {
      return;
    }

    const { name } = JSON.parse(data);
    return name;
  }
}
