import { Component } from '@angular/core';
import { CategoriesComponent } from "../content/sidebar-right/categories/categories.component";
import { TagsComponent } from "../content/sidebar-right/tags/tags.component";
import { SocialLinksComponent } from "../content/sidebar-right/social-links/social-links.component";
import { BodyBannerComponent } from "../body-banner/body-banner.component";
import { SidebarRightComponent } from "../content/sidebar-right/sidebar-right.component";
import { HomeComponent } from "../../home/home.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [RouterOutlet, CategoriesComponent, TagsComponent, SocialLinksComponent, BodyBannerComponent, SidebarRightComponent, HomeComponent]
})
export class BodyComponent {

}
