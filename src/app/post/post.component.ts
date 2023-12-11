import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { BackEndService } from '../back-end.service';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDragPreview,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
  ViewChild,
  TemplateRef,
  AfterViewInit,
  ViewContainerRef,
  OnDestroy,
} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  listofpost: Post[] = [];
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
    drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
      moveItemInArray(this.listofpost, event.previousIndex, event.currentIndex);
    }

}

