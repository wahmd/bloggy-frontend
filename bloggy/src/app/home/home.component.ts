import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'bloggy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  name: string | null;

  constructor(private userService: UserService) {
    this.name = this.userService.getName();
  }
}
