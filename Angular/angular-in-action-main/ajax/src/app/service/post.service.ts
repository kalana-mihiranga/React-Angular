import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export type Post = {
  id: number,
  userId: number,
  title: string,
  body: string
}

@Injectable()
export class PostService {
  readonly API_BASE_URL
    = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API_BASE_URL);
  }
}
