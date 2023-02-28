import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'bloggy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  btns: string[] = ['all posts'];
  username: string | null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.username = this.userService.getUsername();
  }

  logout() {
    this.authService.logout();
  }
}
