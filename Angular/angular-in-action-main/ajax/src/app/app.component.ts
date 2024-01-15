import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Post, PostService} from "./service/post.service";

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  template: `
    <h1 class="text-center p-2 m-0">Ajax with Angular</h1>
    <div class="p-2">
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>User ID</th>
              </tr>
          </thead>
          <tbody>
            @for(post of postList; track post.id){
                <tr>
                    <td>{{post.id}}</td>
                    <td>{{post.title}}</td>
                    <td>{{post.userId}}</td>
                </tr>
                <tr>
                    <td colspan="3">
                        {{post.body}}
                    </td>
                </tr>
            }
          </tbody>
      </table>
    </div>
  `
})
export class AppComponent {
  postList: Post[] = [];
  constructor(postService: PostService) {
    postService.getAllPosts()
      .subscribe(postList =>
        this.postList = postList)
  }
}
