import { Component } from '@angular/core';
 import { CategoriesComponent } from "../navigation/side-nav/categories/categories.component";
import { TagsComponent } from "../navigation/side-nav/tags/tags.component";
import { SocialLinksComponent } from "../navigation/side-nav/social-links/social-links.component";
import { RecentPostComponent } from "../post/recent-post/recent-post.component";
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
