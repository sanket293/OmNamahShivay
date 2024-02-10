import { Component, OnInit } from '@angular/core';
import { CategoriesComponent } from "../../navigation/side-nav/categories/categories.component";
import { SocialLinksComponent } from "../../navigation/side-nav/social-links/social-links.component";
import { TagsComponent } from "../../navigation/side-nav/tags/tags.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../../model/post.model';
import { PostService } from '../../../services/post/post.service';
import { Languages } from '../../../enums/languages.enum';
import { AppUtilites } from '../../../constants/apputilities.model';

@Component({
    selector: 'app-recent-post',
    standalone: true,
    templateUrl: './recent-post.component.html',
    styleUrl: './recent-post.component.css',
    imports: [CategoriesComponent, SocialLinksComponent, TagsComponent, RouterModule, CommonModule]
})
export class RecentPostComponent implements OnInit {
    AppUtilites = AppUtilites;

    constructor(private postService: PostService) { }

    recentPosts$: Observable<Post[]> | undefined;

    ngOnInit(): void {
        // Post
        this.recentPosts$ = this.postService.getRecentPossts();
    }
    // getLanguageName(languageEnum: Languages = Languages.Hindi): string {
    //     return Languages[languageEnum].toString();
    // }
}

