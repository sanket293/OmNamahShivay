import { Component } from '@angular/core';
import { CategoriesComponent } from "../sidebar-right/categories/categories.component";
import { SocialLinksComponent } from "../sidebar-right/social-links/social-links.component";
import { TagsComponent } from "../sidebar-right/tags/tags.component";

@Component({
    selector: 'app-recent-post',
    standalone: true,
    templateUrl: './recent-post.component.html',
    styleUrl: './recent-post.component.css',
    imports: [CategoriesComponent, SocialLinksComponent, TagsComponent]
})
export class RecentPostComponent {

}
