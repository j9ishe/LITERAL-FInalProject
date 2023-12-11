import { EventEmitter, Injectable } from "@angular/core";
import { Post } from './post.model';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class PostService {

  listChangeEvent: EventEmitter<Post[]> = new EventEmitter();
  listofpost: Post[] = [];

  getPost(): Observable<Post[]> {
    return of(this.listofpost);
  }
  addPost(post:Post) {
    this.listofpost.push(post);
  }
  deletePost(index: number) {
    this.listofpost.splice(index, 1);
  }
  getSpecPost(index: number) {
    return this.listofpost[index];
  }
  updatePost(index: number, post: Post) {
    this.listofpost[index] = post;
  }
  likePost(index: number) {
    this.listofpost[index].likes += 1;
  }
  setPosts(listofpost: Post[]) {
    this.listofpost = listofpost;
    this.listChangeEvent.emit(listofpost);
  }
}

