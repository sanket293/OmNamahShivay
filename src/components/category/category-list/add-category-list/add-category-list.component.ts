import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../../../services/category/category.service';
import { Observable, of } from 'rxjs';
import { CategoryEnumNotEntered, CategoryList } from '../../../../model/category/categories.interface';
import { FormsModule } from '@angular/forms';
import { ResponseMessage } from '../../../../model/response-message.model';
import { LoaderComponent } from "../../../shared/loader/loader.component";

@Component({
  selector: 'app-add-category-list',
  standalone: true,
  templateUrl: './add-category-list.component.html',
  styleUrl: './add-category-list.component.css',
  imports: [RouterModule, CommonModule, FormsModule, LoaderComponent]
})
export class AddCategoryListComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) { }

  categoryList: CategoryList = { CategoryEnumId: 1, CategoryNameLabel: "", CategoryNameLabelSanskrit: "", DisplayOrder: "a", IsActive: 0 };
  categoryListId: number = 0;
  categoryEnums$: Observable<CategoryEnumNotEntered[]> = of([]);
  message: string = "";
  showLoader: boolean = false;

  ngOnInit(): void {

    this.categoryEnums$ = this.categoryService.getNotEnteredCategoryEnums();

    this.activatedRoute.params.subscribe((route) => {
      this.categoryListId = route["CategoryListId"];
    });
  }

  onInsertRecordBtnClick() {
    this.message = "";
    this.showLoader = true;

    if (!this.categoryList.CategoryEnumId) {
      this.message = "CategoryEnumId  ";
    }
    if (!this.categoryList.CategoryNameLabel) {
      this.message += "CategoryNameLabel  ";
    }
    if (!this.categoryList.CategoryNameLabelSanskrit) {
      this.message += "CategoryNameLabelSanskrit  ";
    }
    if (!this.categoryList.DisplayOrder) {
      this.message += "DisplayOrder  ";
    }
    if (!this.categoryList.IsActive) {
      this.message += "DisplayOrder  ";
    }

    if (this.message) {
      this.showLoader = false;
      return;
    }

    this.categoryService.addCategoryList(this.categoryList).subscribe({
      next: (response: ResponseMessage) => {
        this.message = response.message;
        //loader false
        //navigate to home 
        this.router.navigate(['']);
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
