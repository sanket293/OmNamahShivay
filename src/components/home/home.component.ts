import { Component } from '@angular/core';
import { CategoriesComponent } from "./categories/categories.component";
import { TagsComponent } from "./tags/tags.component";
 import { HomeBannerComponent } from "./home-banner/home-banner.component";
import { PostListComponent } from "./post-list/post-list.component";
 
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CategoriesComponent, TagsComponent, HomeBannerComponent, PostListComponent]
})
export class HomeComponent {

}
