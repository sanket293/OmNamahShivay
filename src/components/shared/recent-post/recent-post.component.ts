import { Component } from '@angular/core';
import { CategoriesComponent } from "../side-nav/categories/categories.component";
import { SocialLinksComponent } from "../side-nav/social-links/social-links.component";
import { TagsComponent } from "../side-nav/tags/tags.component";

@Component({
    selector: 'app-recent-post',
    standalone: true,
    templateUrl: './recent-post.component.html',
    styleUrl: './recent-post.component.css',
    imports: [CategoriesComponent, SocialLinksComponent, TagsComponent]
})
export class RecentPostComponent {

}
