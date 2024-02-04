import { Component, OnInit } from '@angular/core';
import { CategoriesComponent } from "../side-nav/categories/categories.component";
import { SocialLinksComponent } from "../side-nav/social-links/social-links.component";
import { TagsComponent } from "../side-nav/tags/tags.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../../model/post.model';
import { PostService } from '../../../services/post.service';

@Component({
    selector: 'app-recent-post',
    standalone: true,
    templateUrl: './recent-post.component.html',
    styleUrl: './recent-post.component.css',
    imports: [CategoriesComponent, SocialLinksComponent, TagsComponent, RouterModule, CommonModule]

})
export class RecentPostComponent implements OnInit {

    constructor(private postService: PostService) { }

    recentPosts$: Observable<Post[]> | undefined;

    ngOnInit(): void {
        // Post
        this.recentPosts$ = this.postService.getRecentPossts();
    }

}

