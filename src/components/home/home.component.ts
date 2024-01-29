import { Component } from '@angular/core';
import { BodyBannerComponent } from "../body/content/body-banner/body-banner.component";
import { CategoriesComponent } from "../body/content/sidebar-right/categories/categories.component";
import { TagsComponent } from "../body/content/sidebar-right/tags/tags.component";
import { SocialLinksComponent } from "../body/content/sidebar-right/social-links/social-links.component";
import { SidebarRightComponent } from "../body/content/sidebar-right/sidebar-right.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BodyBannerComponent, CategoriesComponent, TagsComponent, SocialLinksComponent, SidebarRightComponent]
})
export class HomeComponent {

}
