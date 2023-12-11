import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post?:Post;
  @Input() index: number = 0;
  newComment: string = '';
  myScriptElement: HTMLScriptElement;
  constructor(private postService: PostService, private router: Router, private backendservice: BackEndService) {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "assets/script.js";
    document.body.appendChild(this.myScriptElement)
    }

    deleteButton(){
      this.postService.deletePost(this.index);
      this.backendservice.saveData();
    }
    editButton() {
      this.router.navigate(['/post-edit', this.index])
      this.backendservice.saveData();
    }
    likePost() {
      this.postService.likePost(this.index);
      this.backendservice.saveData();
    }
    addComment() {
      if (this.newComment) {
        this.post?.comments.push(this.newComment);
        this.backendservice.saveData();
        this.newComment = '';
      }
    }

}

