import { EventEmitter, Injectable } from "@angular/core";
import { Post } from './post.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn:'root'
})
export class PostService {
  listChangeEvent: EventEmitter<Post[]> = new EventEmitter();
  listofpost: Post[] = [
    // new Post(
    //   "Machi",
    //   "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
    //   "Gab",
    //   "lorem",
    //   new Date()),

    // new Post(
    //   "Ato",
    //   "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
    //   "Gab",
    //   "lorem",
    //   new Date()),

    // new Post(
    //   "Cookies",
    //   "https://nanangocountryvet.com.au/wp-content/uploads/Nanango-Country-Vet-Cats-and-Kittens.jpg",
    //   "Gab",
    //   "lorem",
    //       new Date()),
    // new Post(
    //   "Cream",
    //   "https://cdn.jwplayer.com/v2/media/OJGSRhSM/poster.jpg?width=720",
    //   "Gab",
    //   "lorem",
    //     new Date()),

  ];

  getPost() {
    location.reload;
    return this.listofpost;
  }
  addPost(post:Post) {
    this.listofpost.push(post);

      const listofpost: Post[] = this.getPost();
      this.http.put('https://cc105-50dd5-default-rtdb.asia-southeast1.firebasedatabase.app/post.json', listofpost).subscribe((res)=>{console.log(res)})

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
  constructor( private http: HttpClient) { }

}

