import { Component } from '@angular/core';
 import { CategoriesComponent } from "../shared/side-nav/categories/categories.component";
import { TagsComponent } from "../shared/side-nav/tags/tags.component";
import { SocialLinksComponent } from "../shared/side-nav/social-links/social-links.component";
import { RecentPostComponent } from "../shared/recent-post/recent-post.component";
import { HomeBannerComponent } from "./home-banner/home-banner.component";
import { PopularPostComponent } from "./popular-post/popular-post.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CategoriesComponent, TagsComponent, SocialLinksComponent, RecentPostComponent, HomeBannerComponent, PopularPostComponent]
})
export class HomeComponent {

}
