import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryListItem } from '../../../model/categories.interface';
import { ResponseMessage } from '../../../model/response-message.model';
import { LoaderComponent } from "../../shared/loader/loader.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddItemsService } from '../../../services/add-items/add-items.service';

@Component({
  selector: 'app-add-list-item',
  standalone: true,
  templateUrl: './add-list-item.component.html',
  styleUrl: './add-list-item.component.css',
  imports: [RouterModule, CommonModule, FormsModule, LoaderComponent]
})
export class AddListItemComponent implements OnInit {

  showLoader: boolean = false;
  message: string = "";
  isActive: boolean = true;
  categoryNameLabel: string = "";

  categoryListItem: CategoryListItem = { CategoryListId: 0, CategoryListItemId: 0, DisplayOrder: "", ImageUrl: "", IsActive: 1, ItemKey: "", Title: "" };

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private addItemsService: AddItemsService) { }

  onInputChanges(): void {
    this.categoryListItem.ParmaLinkDescription = `${this.categoryListItem.ItemKey}`;
  }

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

    this.addItemsService.addCategoryListItem(this.categoryListItem).subscribe({
      next: (response: ResponseMessage) => {
        this.message = response.message;
        this.router.navigate([`/show-list-item/${this.categoryListItem.CategoryListId}`]);
      },
      error: (err) => {
        this.message = "There is some error: " + JSON.stringify(err);
        this.showLoader = false;
      },
      complete: () => {
        this.showLoader = false;
      }
    });

  }
}

