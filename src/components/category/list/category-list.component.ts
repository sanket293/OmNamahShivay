import { Component } from '@angular/core';
import { CategoriesComponent } from "../../navigation/side-nav/categories/categories.component";

@Component({
    selector: 'app-category-list',
    standalone: true,
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.css',
    imports: [CategoriesComponent]
})
export class CategoryListComponent {

}
