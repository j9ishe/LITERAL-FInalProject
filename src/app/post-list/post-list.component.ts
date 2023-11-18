import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  listofpost: Post[] = [];
  constructor(private PostService: PostService, private backendservice: BackEndService) { }


  ngOnInit(): void {
    this.backendservice.fetchData().subscribe((posts) => {
      this.listofpost = posts;
    });
  }
}

