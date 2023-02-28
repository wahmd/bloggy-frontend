import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'bloggy-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<any[]> | undefined;

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'userId', headerName: 'userId' },
    { field: 'title', headerName: 'Title' },
    { field: 'body', headerName: 'Body' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getPosts();
  }

  ngOnInit() {}
}
