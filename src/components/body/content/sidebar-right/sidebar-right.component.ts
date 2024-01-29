import { Component } from '@angular/core';
import { CategoriesComponent } from "./categories/categories.component";
import { TagsComponent } from "./tags/tags.component";
import { SocialLinksComponent } from "./social-links/social-links.component";

@Component({
    selector: 'app-sidebar-right',
    standalone: true,
    templateUrl: './sidebar-right.component.html',
    styleUrl: './sidebar-right.component.css',
    imports: [CategoriesComponent, TagsComponent, SocialLinksComponent]
})
export class SidebarRightComponent {

}
