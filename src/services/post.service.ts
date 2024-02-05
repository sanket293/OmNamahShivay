import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  recentPost: Post[] = [
    {
      postId: 123,
      postContent: "Content coming soon",
      postDate: "29 March 2024",
      postImageUrl: "/assets/images/post/post-1.jpg",
      postTitle: "Post coming soon",
      postUrl: "/123",
      timeToRead: "12 Mins to Read"
    },
    // {
    //   postId: 456,
    //   postContent: "Some Post Content 456",
    //   postDate: "29 March 2024",
    //   postImageUrl: "assets/images/post/post-2.jpg",
    //   postTitle: "Post Title 456",
    //   postUrl: "/Post/456",
    //   timeToRead: "2 Mins to Read"
    // },
  ];

  getRecentPossts(): Observable<Post[]> {
    return of(this.recentPost);
  }

  getPostDetails(postId: number): Observable<Post|undefined> | undefined {

    return of(this.recentPost.find(f => f.postId === postId));
  }

  constructor() { }
}
