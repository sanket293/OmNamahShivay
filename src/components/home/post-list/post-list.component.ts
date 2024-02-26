import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUtilites } from '../../../constants/apputilities.model';
import { Post } from '../../../model/post.model';
import { PostService } from '../../../services/post/post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  imports: [CategoriesComponent, TagsComponent, RouterModule, CommonModule]

})
export class PostListComponent implements OnInit {
  AppUtilites = AppUtilites;

  constructor(private postService: PostService) { }

  recentPosts$: Observable<Post[]> | undefined;

  ngOnInit(): void {
    // Post
    this.recentPosts$ = this.postService.getRecentPossts();
  }
}
