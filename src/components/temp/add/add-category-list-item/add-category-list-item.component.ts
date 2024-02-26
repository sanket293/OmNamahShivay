import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from "../../../shared/loader/loader.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryListItem } from '../../../../model/category/categories.interface';
import { CategoryService } from '../../../../services/category/category.service';
import { ResponseMessage } from '../../../../model/response-message.model';

@Component({
  selector: 'app-add-category-list-item',
  standalone: true,
  templateUrl: './add-category-list-item.component.html',
  styleUrl: './add-category-list-item.component.css',
  imports: [RouterModule, CommonModule, FormsModule, LoaderComponent]
})
export class AddCategoryListItemComponent implements OnInit {

  showLoader: boolean = false;
  message: string = "";
  isActive: boolean = false;
  categoryNameLabel: string = "";

  categoryListItem: CategoryListItem = { CategoryListId: 0, CategoryListItemId: 0, DisplayOrder: "", ImageUrl: "", IsActive: 1, ItemKey: "", Title: "" };

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((route) => {
      this.categoryListItem.CategoryListId = route["CategoryListId"];
      this.categoryNameLabel = route["CategoryNameLabel"];
    });
  }

  onInsertRecordBtnClick() {
    this.message = "";
    this.showLoader = true;

    if (!this.categoryListItem.ItemKey) {
      this.message = "ItemKey  ";
    }
    if (!this.categoryListItem.Title) {
      this.message += "Title  ";
    }
    if (!this.categoryListItem.DisplayOrder) {
      this.message += "DisplayOrder  ";
    } 
    if (this.message) {
      this.showLoader = false;
      return;
    }

    this.categoryListItem.IsActive = +this.isActive;
    console.log(JSON.stringify(this.categoryListItem));

    this.categoryService.addCategoryListItem(this.categoryListItem).subscribe({
      next: (response: ResponseMessage) => {
        this.message = response.message;
        this.router.navigate([`/CategoryList/${this.categoryListItem.CategoryListId}`]);
      },
      error: (err) => {
        this.message = "There is some error: " + JSON.stringify(err);
      },
      complete: () => {
        this.showLoader = false;
      }
    });

  }
}
