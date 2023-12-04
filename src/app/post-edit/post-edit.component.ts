import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Post } from '../post.model';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent {
  index: number = 0;
  form!: FormGroup;
  editMode = false;
  constructor(
    private postService: PostService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private backendservice: BackEndService) { }


  ngOnInit(): void {
    let title = '';
    let imgPath = '';
    let description = '';


    this.actRoute.params.subscribe((params: Params) => {
      if (params['index']) {
        this.index = params['index']
        console.log(params['index'])

        const postSpec = this.postService.getSpecPost(this.index);
        title = postSpec.title;
        imgPath = postSpec.img;
        description = postSpec.description;
        this.editMode = true;

      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      imgPath: new FormControl(imgPath, [Validators.required]),
      description: new FormControl(description, [Validators.required])
    });
  }
  onSubmit() {

    const title = this.form.value.title;
    const imgPath = this.form.value.imgPath;
    const description = this.form.value.description;
    const post: Post = new Post(title, imgPath, 'Gab', description, new Date());

    if (this.editMode == true) {
      this.postService.updatePost(this.index, post);
      this.backendservice.saveData();
      alert('Post Edited')

    }
    else {
      this.postService.addPost(post);
      this.backendservice.saveData();
      alert('Posted')

    }
    this.router.navigate(['post-list'])

  }

}
