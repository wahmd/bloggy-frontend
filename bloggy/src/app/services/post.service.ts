import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

// todo
const baseUrl = 'http://localhost:8000';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http
      .get<any>(`${baseUrl}/posts`)
      .pipe(map((item) => item && item.posts));
  }
}
