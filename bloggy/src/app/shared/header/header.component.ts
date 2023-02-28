import { Component } from '@angular/core';

@Component({
  selector: 'bloggy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  btns: string[] = ['all posts'];
}
